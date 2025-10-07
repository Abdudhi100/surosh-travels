// tailwind.config.ts
import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0A1E3F",           // Navy Blue
        "primary-foreground": "#FFFFFF",
        background: "#FFFFFF",
        foreground: "#1F2933",
        "accent-sky": "#4DA6FF",
        "accent-gold": "#FFD700",
        secondary: "#C0C4C9",
        "muted-light": "#F7F8FA",
        "muted-dark": "#1F2933",
        "card-bg": "var(--color-card-bg)",
        "card-text": "var(--color-card-text)",
        border: "var(--color-border)",
        ring: "var(--color-ring)",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.625rem",
        xl: "0.75rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        premium: "0 8px 20px rgba(0,0,0,0.08)",
        premiumHover: "0 12px 24px rgba(0,0,0,0.12)",
      },
      transitionProperty: {
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        shadows: "box-shadow",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      // Tailwind native animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fade: "fadeIn 0.5s ease-in-out forwards",
        "fade-slow": "fadeIn 1.2s ease-in-out forwards",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [
    // Base styles plugin
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
          fontFamily: theme("fontFamily.sans").join(", "),
          lineHeight: "1.6",
          WebkitFontSmoothing: "antialiased",
        },
        h1: {
          color: "var(--color-foreground)",
          fontFamily: theme("fontFamily.heading").join(", "),
          fontWeight: "700",
        },
        h2: {
          color: "var(--color-foreground)",
          fontFamily: theme("fontFamily.heading").join(", "),
          fontWeight: "700",
        },
        h3: {
          color: "var(--color-foreground)",
          fontFamily: theme("fontFamily.heading").join(", "),
          fontWeight: "600",
        },
        a: {
          color: "var(--color-accent-sky)",
          transition: "color 0.3s ease",
          textDecoration: "none",
        },
        "a:hover": {
          color: "var(--color-accent-gold)",
        },
        button: {
          borderRadius: theme("borderRadius.lg"),
          fontWeight: "500",
          transition: "all 0.3s ease",
          outline: "none",
          cursor: "pointer",
        },
        "input, textarea, select": {
          borderColor: "var(--color-border)",
          borderRadius: theme("borderRadius.md"),
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          transition: "all 0.3s ease",
          outline: "none",
        },
      });
    }),
  ],
};

export default config;
