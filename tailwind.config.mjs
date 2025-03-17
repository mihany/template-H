/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			brand: {
  				logo: '#1A8286',
  				light: '#3AB0FF',
  				DEFAULT: '#1A8286',
  				dark: '#303034'
  			},
  			secondary: {
  				whiteSmoke: '#F5F5F5',
  				robinEggBlue: '#48CFCB',
  				darkCyan: '#229799',
  				orangeBuff: '#CF9968',
  				alloyOrange: '#C0682A',
  				onyx: '#424242',
  				trial: '#c7b590',
  				trial2: '#b79565',
  				trial3: '#bbcdd6',
  				trial4: '#B9F0E7',
  				grey: '#09AE73',
  				lightGreenBG: '#D9F9D3',
  				lightGreen: '#48CFCB',
  				green: '#229799',
  				aquaMarine: '#00FFBB',
  				orangeCTA: '#F05806',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration, 30s) linear infinite',
  			shimmer: 'shimmer 5s infinite linear',
  			glow: 'glow 2s infinite ease-in-out'
  		},
  		keyframes: {
  			marquee: {
  				to: {
  					transform: 'translateX(-50%)'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-100% 0'
  				},
  				'100%': {
  					backgroundPosition: '100% 0'
  				}
  			},
  			glow: {
  				'0%, 100%': {
  					opacity: 0
  				},
  				'50%': {
  					opacity: 1
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
