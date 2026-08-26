const path = require('path');

// Use array form so postcss-loader uses require() directly on these paths,
// bypassing any root-level tailwindcss v4 that would otherwise be resolved.
module.exports = {
  plugins: [
    require(path.join(__dirname, 'node_modules/tailwindcss')),
    require(path.join(__dirname, 'node_modules/autoprefixer')),
  ],
};
