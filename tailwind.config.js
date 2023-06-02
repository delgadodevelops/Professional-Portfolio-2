/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#ffb600',
        'custom-blue': '#07272d',
        'custom-bluee': '#0b424d',
      },
    },
  },
  plugins: [],
}