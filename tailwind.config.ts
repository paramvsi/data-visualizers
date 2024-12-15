import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Roboto Slab", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "#1a237e",
        "light-blue": "#64b5f6",
        "cool-grey": "#9e9e9e",
        "alert-red": "#e57373",
        white: "#ffffff",
        black: "#000000",
      },
      ontSize: {
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem", // 32px
      },
      lineHeight: {
        tight: "1.2",
        normal: "1.5",
        loose: "1.75",
      },
      extend: {
        backgroundImage: {
          "gradient-to-r":
            "linear-gradient(to right, var(--tw-gradient-stops))",
          "gradient-to-br":
            "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        },
        gradientColorStops: {
          primary: "#1a237e",
          secondary: "#64b5f6",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
