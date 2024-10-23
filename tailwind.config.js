/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customblue: "var(--customblue)",
        custompurple: "var(--custompurple)",
      },
      backgroundColor: {
        "customblue": "var(--customblue)",
        "custompurple": "var(--custompurple)",
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(var(--tw-gradient-stops))",
      },
      borderColor:{
        "customblue": "var(--customblue)",
        "custompurple": "var(--custompurple)",
      }
    },
  },
  plugins: [],
};
