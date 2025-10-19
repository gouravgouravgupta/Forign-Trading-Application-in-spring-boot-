import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#dcebff',
          200: '#b9d7ff',
          300: '#8cbcff',
          400: '#5e9cff',
          500: '#357aff',
          600: '#245ee6',
          700: '#1d4abb',
          800: '#1a3d96',
          900: '#193673'
        }
      }
    }
  },
  plugins: [],
} satisfies Config
