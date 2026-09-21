/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#1E6F50', // Reference Fixoria Dark Forest Green
          900: '#144e37',
          950: '#0b2b1e',
        },
        surface: {
          light: '#F8FAF9',
          card: '#FFFFFF',
          border: '#E7ECE9',
          muted: '#64748B',
          heading: '#192823',
        },
        status: {
          green: {
            bg: '#EAF7EE',
            text: '#1E6F50',
            border: '#BFE7CB',
          },
          amber: {
            bg: '#FEF6E9',
            text: '#B45309',
            border: '#FBD89D',
          },
          blue: {
            bg: '#EEF6FD',
            text: '#1D4ED8',
            border: '#BFDBFE',
          },
          red: {
            bg: '#FDEEEE',
            text: '#DC2626',
            border: '#FECACA',
          },
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.02), 0 10px 30px rgba(0, 0, 0, 0.04)',
        'glow-green': '0 0 40px rgba(30, 111, 80, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      }
    },
  },
  plugins: [],
}
