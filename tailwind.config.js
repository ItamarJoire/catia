/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          green: '#2e4007',
          'green-dark': '#212E05',
          gray: '#545454',
          yellow: '#e1c340',
          'yellow-dark': '#bc9c22',
          'yellow-dark-2': '#8F761A'
        }
      }
    }
  },
  plugins: []
}
