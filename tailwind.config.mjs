/**
 * Qreturns — brand tokens (qreturns/brand/qreturns-brand-guidelines.html)
 * 60% paper · 30% ink · 10% crimson accent.
 */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F4F1EA",
        "bg-2": "#EAE5DA",
        surface: "#ffffff",
        ink: "#1E1E1A",
        "ink-2": "#3F3E39",
        muted: "#5E5C55",
        faint: "#8A877F",
        line: "#E2DDD1",
        "line-2": "#D3CDBF",
        btn: { DEFAULT: "#1E1E1A", hover: "#34332E" },
        brand: { DEFAULT: "#BE123C", ink: "#9F1239", bright: "#FDA4AF", soft: "#FFE4E6", line: "#FECDD3" },
        down: "#C23B22",
        warning: { DEFAULT: "#b45309", soft: "#fef3c7", line: "#fde68a" },
        blue: { DEFAULT: "#2563eb", soft: "#eff6ff", line: "#bfdbfe" },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "system-ui", "-apple-system", "sans-serif"],
        display: ['"Be Vietnam Pro"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Be Vietnam Pro"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.08em" }],
        stat: ["1.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h3: ["1.25rem", { lineHeight: "1.25", letterSpacing: "-0.018em" }],
        h2: ["clamp(1.75rem, 3.4vw, 2.6rem)", { lineHeight: "1.1", letterSpacing: "-0.028em" }],
        h1: ["clamp(2.2rem, 4.8vw, 3.8rem)", { lineHeight: "1.05", letterSpacing: "-0.034em" }],
        display: ["clamp(2.7rem, 5.6vw, 4.9rem)", { lineHeight: "1.0", letterSpacing: "-0.04em" }],
      },
      letterSpacing: { tight2: "-0.018em", tightest: "-0.034em" },
      maxWidth: { wrap: "1080px", wide: "1200px" },
      borderRadius: { lg2: "0.625rem", xl2: "0.875rem", "2xl2": "1.25rem", "3xl2": "1.75rem" },
      boxShadow: {
        xs: "0 1px 2px rgba(30,30,26,.05)",
        sm: "0 1px 2px rgba(30,30,26,.06), 0 1px 1px rgba(30,30,26,.04)",
        card: "0 1px 3px rgba(30,30,26,.06), 0 10px 24px -10px rgba(30,30,26,.08)",
        float: "0 1px 1px rgba(30,30,26,.04), 0 8px 24px -12px rgba(30,30,26,.18), 0 40px 80px -36px rgba(30,30,26,.22)",
        glow: "0 0 0 1px rgba(190,18,60,.16), 0 18px 50px -20px rgba(190,18,60,.30)",
      },
    },
  },
  plugins: [],
};
