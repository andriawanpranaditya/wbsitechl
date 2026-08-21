import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#E3A937', light: '#F3CF7A', deep: '#C8882A' },
        forest: { DEFAULT: '#1F3D33', deep: '#14291F' },
        ivory: '#FBF8F1',
        sand: '#EFE7D6',
        ink: '#1B1B18',
        stone: '#6F6B60',
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
