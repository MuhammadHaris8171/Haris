/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'DowntoUp': 'DowntoUp 1s linear 1',
      },
      
    },
  },
  plugins: [],
};
