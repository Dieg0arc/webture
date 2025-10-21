import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(10px,-6px) scale(1.03)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%,100%": { boxShadow: "0 0 0px rgba(168,85,247,0.0)" },
          "50%": { boxShadow: "0 0 40px rgba(168,85,247,0.35)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
        fadeInUp: "fadeInUp .8s ease-out forwards",
        glow: "glow 2.2s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 10%, rgba(168,85,247,.25) 0 12%, transparent 13%), radial-gradient(circle at 80% 20%, rgba(139,92,246,.20) 0 10%, transparent 11%), radial-gradient(circle at 40% 80%, rgba(217,70,239,.18) 0 14%, transparent 15%), radial-gradient(1200px 800px at 50% 40%, #0b0315, #05010b 70%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

