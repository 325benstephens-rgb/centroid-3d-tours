/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral charcoal scale — primary text, borders, dark UI, replaces the old navy scale.
        charcoal: {
          50: '#f7f7f7',
          100: '#ebebeb',
          200: '#dddddd',
          300: '#c2c2c2',
          400: '#a0a0a0',
          500: '#717171',
          600: '#555555',
          700: '#3d3d3d',
          800: '#2b2b2b',
          900: '#222222',
          950: '#141414',
        },
        // Rausch-style coral/pink — primary accent for CTAs and highlights.
        accent: {
          50: '#fff1f2',
          100: '#ffe1e4',
          200: '#ffc2c9',
          300: '#ff94a1',
          400: '#ff5a6e',
          500: '#ff385c',
          600: '#e0294a',
          700: '#b81f3b',
          800: '#8f1830',
          900: '#6b1225',
        },
        // Base page background — clean white, per the reference style.
        paper: '#FFFFFF',
        ink: '#222222',
      },
      fontFamily: {
        // One rounded, geometric sans across headings and body (Cereal-style), no serif.
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 20px -4px rgba(34, 34, 34, 0.12)',
        card: '0 2px 8px rgba(34, 34, 34, 0.08)',
        lift: '0 12px 28px -6px rgba(34, 34, 34, 0.18)',
      },
    },
  },
  plugins: [],
}
