/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //"{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/plugins/**/*.{js,ts,mjs}",
    "{srcDir}/composables/**/*.{js,ts,mjs}",
    "{srcDir}/utils/**/*.{js,ts,mjs}",
    "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/app.config.{js,ts,mjs}",
    "{srcDir}/app/spa-loading-template.html"
  ],
  theme: { 
    extend: {
      colors: {
        'secondaryLight': '#f2d7b6',  //#f9f6ee;
        'primaryTransparent': '#f9f6eea1',   //#e8f0f73a; //#e8f0f76e;
        'primaryLight':  '#e5e7eb',    // #f2d7b6; 
        'primaryMedium': '#f2ca80',
        'primaryDark': '#d9a362',
        'secondaryDark': '#28190e',
      },
    },
  },
  plugins: [],
}

