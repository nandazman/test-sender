module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    borderRadius: {
      none: "0",
      sm: "5px",
      DEFAULT: "4px",
      md: "8px",
      lg: "10px",
      full: "9999px",
      large: "12px",
    },
    extend: {
      spacing: {
        "5px": "5px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "30px": "30px",
        "32px": "32px",
        "40px": "40px",
        "48px": "48px",
        "50px": "50px",
      },
      fontFamily: {
        inter: ["Inter"],
        mulish: ["Mulish"],
      },
      colors: {
        "green-tosca": "#49A0A4",
        orange: "E87F2F",
        "dark-blue": "#1D2038",
        black: "#000",
        white: "#fff",
        "light-grey": "#F7F8FC",
        grey: "#979797",
        "dark-grey": "#2E2C36",
        "dashboard-border": "#E9E9E9",
        "line-border": "#E6E6E6",
        "form-border": "#BEBEBE",
        placeholder: "#9B9B9B",
        red: "#DA4040",
        green: "#00B74A",
        primary: "#3548C5",
      },
    },

    container: {
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    },
    fontSize: {
      subtitle: "1.75rem ",
      large: "1.5rem",
      medium: "1.25rem",
      normal: "1rem",
      "semi-normal": "0.875rem",
      small: "0.75rem",
      caption: "0.625rem",
      h1: "48px",
      h2: "40px",
      h3: "32px",
      h4: "25px",
    },
  },
  plugins: [],
};
