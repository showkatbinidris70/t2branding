/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: '2rem', // Adds padding to the container
        screens: {
          sm: '100%', // Full width on small screens
          md: '768px', // 768px width for medium screens
          lg: '1024px', // 1024px width for large screens
          xl: '1280px', // 1280px width for extra-large screens
        },
      },
      colors: {
        bgColor: '#1b1b1b', // Example custom color
        colorWhiteSecondary: "#727272",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // For Google Fonts
        custom: ['CustomFont', 'sans-serif'], // For Local Fonts
      },
    },
  },
  plugins: [],
}

