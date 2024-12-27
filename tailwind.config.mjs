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
        "prussian-blue":"#003459",
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
    },
  },
  plugins: [],
};
