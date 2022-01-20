module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
