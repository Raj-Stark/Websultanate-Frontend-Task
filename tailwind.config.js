/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.875rem", // 14px
        base: "1.125rem", // 18px
        md: "1.5rem", // 24px
        lg: "1.75rem", // 28px
        xl: "2.25rem", // 36px
      },

      fontFamily: {
        playFair: "'Playfair Display', serif ",
        openSans: "'Open Sans', sans-serif ",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
