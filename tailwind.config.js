module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['retro'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    // darkTheme: 'retro',
  },
};
