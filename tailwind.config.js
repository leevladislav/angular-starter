/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,ts}',
    ],
    theme: {
      extend: {
        container: {
          center: true,
          padding: '1rem',
        },
      },
      backgroundColor: () => ({
        primary: '#ffffff',
        secondary: '#000000',
        accent: '#f6f6f6',
      }),
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        yellow: '#facc15',
        green: '#6bc271'
      },
      borderColor: () => ({
        primary: '#e2e2e2',
        transparent: 'transparent',
      })
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
