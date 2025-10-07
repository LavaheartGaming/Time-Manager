/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffd600", // jaune vif Time Manager
        dark: "#0a0f1f", // bleu nuit
      },
    },
  },
  plugins: [],
};
