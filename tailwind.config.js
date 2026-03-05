/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFDF5',
        primary: '#F5E9A0',
        accent: '#E8A87C',
        'text-main': '#2D2A26',
        muted: '#A89F8C',
        surface: '#FFF8E7',
        dark: '#2D2A26',
        'dark-surface': '#3A3630',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        pill: '999px',
      },
      keyframes: {
        animationIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blobPulse: {
          '0%, 100%': { borderRadius: '60% 40% 70% 30% / 50% 60% 40% 70%' },
          '50%': { borderRadius: '40% 60% 30% 70% / 60% 40% 70% 50%' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'animation-in': 'animationIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float-y': 'floatY 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease both',
        'blob-pulse': 'blobPulse 8s ease-in-out infinite',
        ticker: 'ticker 22s linear infinite',
      },
    },
  },
  plugins: [],
};