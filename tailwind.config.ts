import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Forest Green (clean energy)
        primary: {
          DEFAULT: "#228b22",
          50: "#e8f5e8",
          100: "#c6e6c6",
          200: "#9dd99d",
          300: "#6fcc6f",
          400: "#42bf42",
          500: "#228b22",
          600: "#1a6b1a",
          700: "#125212",
          800: "#0a3a0a",
          900: "#042104",
        },
        // Secondary - Vibrant Orange
        secondary: {
          DEFAULT: "#ff6b35",
          50: "#fff1eb",
          100: "#ffe0d1",
          200: "#ffc4a8",
          300: "#ffa67e",
          400: "#ff8a5c",
          500: "#ff6b35",
          600: "#e55a25",
          700: "#bf471a",
          800: "#9a3816",
          900: "#7d2f15",
        },
        // Neutral colors
        neutral: {
          50: "#fefefe",
          100: "#f8fafc",
          200: "#f1f5f9",
          300: "#e2e8f0",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Barlow", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
