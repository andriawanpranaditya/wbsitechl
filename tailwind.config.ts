import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#D89B26', light: '#F0C25C', deep: '#A8731A' },
        forest: { DEFAULT: '#0C2B1E', deep: '#071E14' },
        ivory: '#FCFBF7',
        sand: '#EDE4CC',
        ink: '#14140F',
        stone: '#5E5A4E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
};
export default config;
