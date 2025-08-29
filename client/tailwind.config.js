// tailwind.config.js
export default {
  darkMode: 'class', // enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
