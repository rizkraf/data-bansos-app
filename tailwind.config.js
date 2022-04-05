module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto'],
        'serif': ['Lora'],
      },
      colors: {
        'primary': {
          100: '#C3E9D0',
          200: '#9BDBB3',
          300: '#70CD94',
          400: '#4DC27E',
          500: '#1FB767',
          600: '#16A75C',
          700: '#069550',
          800: '#008444',
          900: '#006430',
        },
        'secondary': {
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
        },
        'tertiary': {
          100: '#FFEEB4',
          200: '#FFE483',
          300: '#FFDA4F',
          400: '#FFD026',
          500: '#FFC800',
          600: '#FFB900',
          700: '#FFA600',
          800: '#FF9500',
          900: '#FF7500',
        }
      },
      spacing: {
        'screen-86': '86vh',
      }
    },
  },
  plugins: [],
}
