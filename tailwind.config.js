/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "generalsans-bold": ["generalsans-bold"],
        "generalsans-semibold": ["generalsans-semibold"],
        "generalsans-medium": ["generalsans-medium"],
      },
    },
  },
  plugins: [],
};
