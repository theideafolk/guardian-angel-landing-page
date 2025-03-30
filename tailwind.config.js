/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7fa',
          100: '#daeef5',
          200: '#b6dae9',
          300: '#8ac0d9',
          400: '#5aa3c6',
          500: '#3a86b0',
          600: '#2a6d96',
          700: '#216081',
          800: '#1A5F7A', // Primary brand color (updated)
          900: '#144965',
        },
        secondary: {
          50: '#fcfaf7',
          100: '#f9f6f0',
          200: '#F3EDE4', // Secondary brand color (updated)
          300: '#ede7de',
          400: '#e5dfd6',
          500: '#d7cfc3',
          600: '#c2b9aa',
          700: '#a89f8d',
          800: '#8c8574',
          900: '#736c5f',
        },
        accent: {
          50: '#faf5f5',
          100: '#f5eaea',
          200: '#ebdada',
          300: '#dcc3c3',
          400: '#caa7a6',
          500: '#B9807F', // Accent brand color (updated)
          600: '#a97271',
          700: '#946161',
          800: '#7a5050',
          900: '#654444',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        glow: '0 0 15px rgba(185, 128, 127, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'primary-gradient': 'linear-gradient(135deg, #1A5F7A 0%, #2A7F9F 100%)',
        'accent-gradient': 'linear-gradient(135deg, #B9807F 0%, #C89796 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  plugins: [],
};