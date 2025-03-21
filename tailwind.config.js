/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        winky_Sans: ["Winky+Sans"],
        boldonse: ["Boldonse"],
        bytesized: ["Bytesized"],
      },
    },
  },
  plugins: [],
};
