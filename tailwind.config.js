/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        notobangla: ['Noto Serif Bengali', 'serif'],
      },
    },
  },
  plugins: [],
};
