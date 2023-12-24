/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-grey": "#f3f4f6",
        "bg-blue": "#0076b3"
      },
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        roboto: "'Roboto', sans serif "
      },
      container: {
        // center: true,
        // padding: {
        //   DEFAULT: '15px',
        //   sm: '15px',
        //   md: '15px',
        //   lg: '15px',
        //   xl: '15px',
        // }
      }
    },
    colors: {
      "button": "#0076b3"
    },
  },
  plugins: [],
};
