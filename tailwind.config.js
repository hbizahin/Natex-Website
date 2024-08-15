/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
};

// tailwind.config.js (contacts)
module.exports = {
  plugins: [require("@tailwindcss/forms")],
};