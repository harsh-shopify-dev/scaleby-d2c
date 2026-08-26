// craco.config.js
const path = require("path");
require("dotenv").config();

// Intercept and mock typescript checker and eslint webpack plugins to prevent AJV version crashes on modern Node versions
const Module = require("module");
const originalRequire = Module.prototype.require;
Module.prototype.require = function (id) {
  if (id === "fork-ts-checker-webpack-plugin" || id === "eslint-webpack-plugin") {
    class ForkTsCheckerWebpackPlugin {
      apply() {}
      static getCompilerHooks() {
        return {
          waiting: { tap: () => {} },
          issues: { tap: () => {} },
          error: { tap: () => {} }
        };
      }
    }
    return ForkTsCheckerWebpackPlugin;
  }
  return originalRequire.apply(this, arguments);
};


// Check if we're in development/preview mode (not production build)
// Craco sets NODE_ENV=development for start, NODE_ENV=production for build
const isDevServer = process.env.NODE_ENV !== "production";

// Environment variable overrides
const config = {
  enableHealthCheck: process.env.ENABLE_HEALTH_CHECK === "true",
};

function makeDevServerV5Compatible(devServerConfig) {
  const {
    https,
    onAfterSetupMiddleware,
    onBeforeSetupMiddleware,
    onListening,
    setupMiddlewares,
    ...compatibleConfig
  } = devServerConfig;

  compatibleConfig.server =
    typeof https === "object"
      ? { type: "https", options: https }
      : https
        ? "https"
        : "http";
  compatibleConfig.headers = {
    ...compatibleConfig.headers,
    "Cross-Origin-Resource-Policy": "same-origin",
  };

  if (onBeforeSetupMiddleware || setupMiddlewares) {
    compatibleConfig.setupMiddlewares = (middlewares, devServer) => {
      if (onBeforeSetupMiddleware) {
        onBeforeSetupMiddleware(devServer);
      }

      return setupMiddlewares
        ? setupMiddlewares(middlewares, devServer)
        : middlewares;
    };
  }

  compatibleConfig.onListening = (devServer) => {
    devServer.close ??= (callback) => devServer.stopCallback(callback);

    if (onListening) {
      onListening(devServer);
    }
    if (onAfterSetupMiddleware) {
      onAfterSetupMiddleware(devServer);
    }
  };

  return compatibleConfig;
}

// Conditionally load health check modules only if enabled
let WebpackHealthPlugin;
let setupHealthEndpoints;
let healthPluginInstance;

if (config.enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

let webpackConfig = {
  eslint: {
    enable: false, // Disable eslint plugin to prevent build crashes on modern Node versions
    configure: {
      extends: ["plugin:react-hooks/recommended"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // ── Monorepo Fix 0: Remove CRA's ModuleScopePlugin ──────────────────────
      // ModuleScopePlugin enforces that all imports resolve within src/. In a
      // monorepo, webpack resolves packages through the root node_modules and
      // CRA rejects them as "outside src/". Removing it lets webpack resolve
      // packages normally across the monorepo.
      webpackConfig.resolve.plugins = (webpackConfig.resolve.plugins || []).filter(
        (plugin) => plugin.constructor.name !== 'ModuleScopePlugin'
      );

      // ── Monorepo Fix 0b: Deduplicate React ───────────────────────────────────
      // Local app has React 19; root node_modules has React 18. Setting
      // resolve.modules to prefer local node_modules first ensures all
      // transitive dependencies resolve to the single local React copy.
      webpackConfig.resolve.modules = [
        path.resolve(__dirname, 'node_modules'),
        'node_modules',
      ];

      // Disable ForkTsCheckerWebpackPlugin to avoid ajv v3/v5 conflict on Node.js v24
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
      );

      // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
        ],
      };

      // Fix: Override CSS minimizer to use explicit browserslist targets
      // This prevents autoprefixer from walking up to a locked parent package.json
      if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
        webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.map((minimizer) => {
          if (minimizer.constructor && minimizer.constructor.name === 'CssMinimizerPlugin') {
            // Resolve from local node_modules first, then fall back to monorepo root (hoisted)
            let CssMinimizerPlugin;
            try {
              CssMinimizerPlugin = require(path.resolve(__dirname, 'node_modules/css-minimizer-webpack-plugin'));
            } catch (_) {
              CssMinimizerPlugin = require(path.resolve(__dirname, '../../node_modules/css-minimizer-webpack-plugin'));
            }
            return new CssMinimizerPlugin({
              minimizerOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
              },
            });
          }
          return minimizer;
        });
      }

      // ── Monorepo Fix 1: react-refresh ────────────────────────────────────────
      // @pmmmwh/react-refresh-webpack-plugin pre-resolves react-refresh to an
      // absolute path in the ROOT node_modules. CRA's ModuleScopePlugin rejects
      // any import whose real path is outside apps/landing/. Fix: remove the
      // ReactRefreshPlugin and its injected babel transform so CRA compiles cleanly.
      // (The dev server still reloads on changes; only per-component Fast Refresh is disabled.)
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ReactRefreshPlugin'
      );

      // Also remove the react-refresh babel plugin that injects the runtime import
      // into every module (the source of the line-1 import errors).
      const removeReactRefreshFromBabel = (rules) => {
        if (!rules) return;
        rules.forEach((rule) => {
          if (rule.oneOf) removeReactRefreshFromBabel(rule.oneOf);
          const uses = rule.use ? (Array.isArray(rule.use) ? rule.use : [rule.use]) : [];
          uses.forEach((use) => {
            if (typeof use === 'object' && use.options && use.options.plugins) {
              use.options.plugins = use.options.plugins.filter(
                (p) => !JSON.stringify(p).includes('react-refresh')
              );
            }
          });
          // Also handle direct options on the rule (babel-loader shorthand)
          if (rule.options && rule.options.plugins) {
            rule.options.plugins = rule.options.plugins.filter(
              (p) => !JSON.stringify(p).includes('react-refresh')
            );
          }
        });
      };
      removeReactRefreshFromBabel(webpackConfig.module.rules);

      // ── Monorepo Fix 2: tailwindcss v3 vs v4 ─────────────────────────────────
      // react-scripts sets postcss-loader with config:false and an inline plugins
      // array that contains the string 'tailwindcss'. That string gets resolved by
      // the root postcss-loader from root node_modules — which has v4 (incompatible).
      // Fix: walk the rules and replace the 'tailwindcss' string with a direct
      // require() of the local v3 copy so the loader uses the right version.
      const localTailwind = require(path.resolve(__dirname, 'node_modules/tailwindcss'));
      const patchPostcss = (rules) => {
        if (!rules) return;
        rules.forEach((rule) => {
          if (rule.oneOf) patchPostcss(rule.oneOf);
          const uses = rule.use ? (Array.isArray(rule.use) ? rule.use : [rule.use]) : [];
          uses.forEach((use) => {
            if (
              typeof use === 'object' &&
              use.loader &&
              use.loader.includes('postcss-loader') &&
              use.options &&
              use.options.postcssOptions &&
              Array.isArray(use.options.postcssOptions.plugins)
            ) {
              use.options.postcssOptions.plugins = use.options.postcssOptions.plugins.map((p) =>
                p === 'tailwindcss' ? localTailwind : p
              );
            }
          });
        });
      };
      patchPostcss(webpackConfig.module.rules);

      // Add health check plugin to webpack if enabled
      if (config.enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }
      return webpackConfig;
    },
  },
};


webpackConfig.devServer = (devServerConfig) => {
  // Force localhost binding to avoid EPERM when binding to 0.0.0.0
  devServerConfig.host = '127.0.0.1';

  // Add health check endpoints if enabled
  if (config.enableHealthCheck && setupHealthEndpoints && healthPluginInstance) {
    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      // Call original setup if exists
      if (originalSetupMiddlewares) {
        middlewares = originalSetupMiddlewares(middlewares, devServer);
      }

      // Setup health endpoints
      setupHealthEndpoints(devServer, healthPluginInstance);

      return middlewares;
    };
  }

  return devServerConfig;
};

// Wrap with visual edits (automatically adds babel plugin, dev server, and overlay in dev mode)
if (isDevServer) {
  try {
    const { withVisualEdits } = require("@emergentbase/visual-edits/craco");
    webpackConfig = withVisualEdits(webpackConfig);
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND' && err.message.includes('@emergentbase/visual-edits/craco')) {
      console.warn(
        "[visual-edits] @emergentbase/visual-edits not installed — visual editing disabled."
      );
    } else {
      throw err;
    }
  }
}

const configureDevServer = webpackConfig.devServer;
webpackConfig.devServer = (devServerConfig) =>
  makeDevServerV5Compatible(configureDevServer(devServerConfig));

module.exports = webpackConfig;
