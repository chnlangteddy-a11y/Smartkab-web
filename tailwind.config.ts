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
        // Primary - Tech Blue (Megarevo industrial style)
        primary: {
          DEFAULT: "#0066CC",
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0066CC",
          600: "#0052A3",
          700: "#003D7A",
          800: "#002952",
          900: "#001429",
        },
        // Secondary - Energy Orange (accent)
        secondary: {
          DEFAULT: "#FF6B00",
          50: "#FFF2E6",
          100: "#FFE5CC",
          200: "#FFCC99",
          300: "#FFB266",
          400: "#FF9933",
          500: "#FF6B00",
          600: "#CC5600",
          700: "#994000",
          800: "#662B00",
          900: "#331500",
        },
        // Accent - Electric Blue (highlights)
        accent: {
          DEFAULT: "#00A3FF",
          50: "#E6F7FF",
          100: "#CCEFFF",
          200: "#99DFFF",
          300: "#66CFFF",
          400: "#33BFFF",
          500: "#00A3FF",
          600: "#0082CC",
          700: "#006299",
          800: "#004166",
          900: "#002133",
        },
        // Industrial Gray Scale
        neutral: {
          50: "#FAFBFC",
          100: "#F4F6F8",
          200: "#E8ECF0",
          300: "#D1D9E0",
          400: "#9AA5B1",
          500: "#6B7785",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#0D1117",
        },
        // Industrial specific colors
        industrial: {
          steel: "#8B9CAF",
          silver: "#C0C8D0",
          graphite: "#3D4852",
          carbon: "#1F2933",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Barlow", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      spacing: {
        // Megarevo-style generous spacing
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        'industrial': '0 4px 20px -2px rgba(0, 102, 204, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.05)',
        'industrial-lg': '0 10px 40px -4px rgba(0, 102, 204, 0.15), 0 4px 16px -4px rgba(0, 0, 0, 0.1)',
        'industrial-xl': '0 20px 60px -8px rgba(0, 102, 204, 0.2), 0 8px 24px -8px rgba(0, 0, 0, 0.1)',
        'glow-blue': '0 0 20px rgba(0, 102, 204, 0.3)',
        'glow-orange': '0 0 20px rgba(255, 107, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #0066CC 0%, #00A3FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1A202C 0%, #0D1117 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(0, 102, 204, 0.95) 0%, rgba(0, 163, 255, 0.9) 100%)',
        'grid-pattern': 'linear-gradient(rgba(0, 102, 204, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 204, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
};
export default config;
