/** @type {import('tailwindcss').Config} */
export default {
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
        brand: {
          logo: '#1A8286',
          light: '#3AB0FF',
          DEFAULT: '#1A8286',
          dark: '#303034',
        },
        secondary: {
          grey: '#ECECEC',
          lightGreenBG: '#D9F9D3',  // opacity in backgrounds should be less than or 80%
          lightGreen: '#09AE73',
          green: '#1E482E',
          aquaMarine: '#00FFBB',
          // light: '#FFDDC1',
          // DEFAULT: '#FFAB76',
          // dark: '#FF7B33',
        },
      },

      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      
    },
  },
  plugins: [],
};
