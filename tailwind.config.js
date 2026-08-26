/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 12px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "ui-sans-serif", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          strong: "rgb(var(--accent-strong) / <alpha-value>)",
          bright: "rgb(var(--accent-bright) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          subtle: "rgb(var(--border-subtle) / <alpha-value>)",
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
        },
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        violet: {
          DEFAULT: "rgb(var(--violet) / <alpha-value>)",
          bright: "rgb(var(--violet-bright) / <alpha-value>)",
        },
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(24 24 27 / 0.04), 0 12px 32px -12px rgb(24 24 27 / 0.10)",
        elevate: "0 2px 4px 0 rgb(24 24 27 / 0.04), 0 30px 60px -24px rgb(24 24 27 / 0.18)",
        glow: "0 1px 2px 0 rgb(5 150 105 / 0.18), 0 14px 34px -12px rgb(5 150 105 / 0.28)",
        "glow-lg": "0 2px 6px 0 rgb(5 150 105 / 0.20), 0 22px 50px -14px rgb(5 150 105 / 0.34)",
        "glow-violet": "0 1px 2px 0 rgb(124 58 237 / 0.18), 0 14px 34px -12px rgb(124 58 237 / 0.26)",
      },
      backgroundImage: {
        "radial-accent": "radial-gradient(closest-side, rgb(16 185 129 / 0.14), transparent)",
        "radial-violet": "radial-gradient(closest-side, rgb(124 58 237 / 0.10), transparent)",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 3.5rem))" },
        },
        "marquee-row": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 1rem))" },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "marquee-scroll": "marquee-scroll 40s linear infinite",
        "marquee-row": "marquee-row 40s linear infinite",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};