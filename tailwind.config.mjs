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
          // the modified original color palette
          whiteSmoke: '#F5F5F5',
          robinEggBlue: '#48CFCB',
          darkCyan: '#229799',
          orangeBuff: '#CF9968',
          alloyOrange: '#C0682A',
          onyx: '#424242',

          // the old color palette
          grey: '#F5F5F5',
          lightGreenBG: '#D9F9D3',  // opacity in backgrounds should be less than or 80%
          lightGreen: '#48CFCB',
          green: '#229799',
          aquaMarine: '#00FFBB',
          orangeCTA: '#F05806',

          // grey: '#ECECEC',
          // lightGreenBG: '#D9F9D3',  // opacity in backgrounds should be less than or 80%
          // lightGreen: '#09AE73',
          // green: '#013220',
          // aquaMarine: '#00FFBB',
          // orangeCTA: '#F05806',

          // light: '#FFDDC1',
          // DEFAULT: '#FFAB76',
          // dark: '#FF7B33',
        },
      },

      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        shimmer: 'shimmer 5s infinite linear',
        glow: 'glow 2s infinite ease-in-out',
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },

        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        glow: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      
      
    },
  },
  plugins: [],
};
