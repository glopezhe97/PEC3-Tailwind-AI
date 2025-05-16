// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1d2815',
      },
      fontSize: {
        xs: '0.90rem',
        sm: '0.95rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
};
