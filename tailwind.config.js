/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        108: "27rem",
        120: "30rem",
      },
      width: {
        108: "27rem",
        120: "30rem",
      },
      colors: {
        "custom-orange": "#ffb600",
        "custom-blue": "#07272d",
        "custom-bluee": "#0b424d",
      },
    },
  },
  plugins: [],
};
