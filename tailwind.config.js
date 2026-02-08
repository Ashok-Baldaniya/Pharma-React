/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Public Sans", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0d1b1e",
        surf: "#f6f3ec",
        mist: "#eef2f0",
        reef: "#1f6f78",
        ember: "#e17a47",
        moss: "#4a7c59",
      },
      boxShadow: {
        glow: "0 20px 50px -24px rgba(31, 111, 120, 0.65)",
        soft: "0 20px 50px -30px rgba(13, 27, 30, 0.35)",
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top, rgba(31,111,120,0.22), transparent 55%), radial-gradient(circle at 80% 40%, rgba(225,122,71,0.2), transparent 50%), linear-gradient(120deg, #f6f3ec, #eef2f0)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        rise: "rise 0.8s ease-out both",
      },
    },
  },
  plugins: [],
}
