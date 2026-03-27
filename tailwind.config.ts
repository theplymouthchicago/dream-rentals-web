import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dr-black":   "#0a0a0a",
        "dr-white":   "#ffffff",
        "dr-cream":   "#f7f5f2",
        "dr-gold":    "#b8943f",
        "dr-gray":    "#888888",
        "dr-muted":   "#555555",
        "dr-border":  "#e8e8e8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,6vw,6rem)",    { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.2rem,4vw,4rem)",  { lineHeight: "1.1",  letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem,2.5vw,2.5rem)", { lineHeight: "1.15" }],
        "label":      ["0.6875rem",               { lineHeight: "1",    letterSpacing: "0.18em" }],
      },
      maxWidth: {
        container:    "1200px",
        "container-sm": "860px",
      },
      spacing: {
        section: "100px",
      },
    },
  },
  plugins: [],
};
export default config;
