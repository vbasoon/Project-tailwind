const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    container: {
      padding: "2rem"
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      body: "#F5F5F7",
      dark: "#1E2329",
      border-dark: "#243040",
      simle-gray: "#929AA5",
      simple-gray2: "#788290",
      link-blue: "#0057FF",
      button-blue: "#0056FE",
      gray-span: rgba(120,130,144.5),
      select-span: "#243040",
      green: "#02C076",
      dark2: #333333,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia
    },
    fonts : {
      trending-title: {
        fontFamily: "IBM Plex Sans",
        fontWeight: 600,
        fontSize: 14px,
        color: $dark
      },
      trending-cards: {
        color-span: $graySpan,
        fontSize-span: 30px,
        fontWeight: 700,
      },
      trending-thema: {
        color-thema: $dark,
        fontSize-thema: 12px,
        fontWeight: 400, 
      },
      trending-title: {
        color-title: $dark,
        fontSize-title: 18px,
        fontWeight: 600
      },
      trending-data: {
        color-data: $simpleGray,
        fontSize-data: 14px,
        fontWeight: 300,
      },
      posts-title: {
        color-title: $dark,
        fontSize-section: 30px,
        fontWeight: 500, 
      },
      post-thema: {
        color-thema: $dark,
        fontSize-thema: 124px,
        fontWeight: 400, 
    },
    post-title: {
      color-title: $dark,
      fontSize-title: 24px,
      fontWeight: 700
    },
    post-text: {
      color-post: $simpleGray2,
      fontSize-text: 18px,
      fontWeight: 400
    },
    post-data: {
      color-data: $simpleGray2,
      fontSize: 16px,
      fontWeight: 400
    },
    all-categories: {
      color-data: $simpleGray2,
      fontSize: 16px,
      fontWeight: 400
    },
  }, 

  fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"]
  },
  extend: {
    spacing: {
      "128": "32rem",
      "144": "36rem"
    },
    borderRadius: {
      "4xl": "2rem"
    }
  }
  }
};
