/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "custom-3xl":"32px",
        "custom-4xl": "38px",
       "custom-6xl":"64px",
      },
      colors: {
        "deep-blue": "#00171F",
        "light-grey": "#7F8A8E",
        "light-white": "#FEFEFE",
        "sky-blue": "#00A8E8",
        "blue": "#003459",
        "pale-grey": "#00000033",
        "prussian-blue": "#003459",
        //      
  "light-blue": "#eaf9ef",
  "dim-black": "#0000001a",
  "faint-black": "#00000014",
  "pale-blue-gray": "#e5eaee",
  "light-white": "#fefefe",
  "black-100": "#0000001a",
  "black-200": "#00000014",
"black-300":" #010101",
"white-100":" #e6ebef",
  "charcoal-blue":" #1a2e35",
  "light-grey":" #cbcbcb",
  "navy-blue":" #007ea7",
  "transparent-sky": "#eaf9fff0",
  "slate":" #ccdae1",
      },
        lineHeight: {
          109: "109%",
          150: "150%",
          110: "110%",
          115:"115%",
      },
         backgroundImage: {
        hero: "url('/assets/images/webp/hero-bg.webp')",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      screens: {
        "custom-screen-md":"769px"
      }
    },
  },
  plugins: [],
};
