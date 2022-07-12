/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '360px'
			},
			colors: {
				primary: '#151931',
				'primary-dark': '#091031',
				secondary: '#F9CA21'
			},
			animation: {
				waterwave: 'waterwave 4s ease-in-out infinite',
				staranimation: 'staranimation 50s linear infinite',
				imagebounce: 'imagebounce 4s linear infinite'
			},
			keyframes: {
				waterwave: {
					'0%, 100%': {
						'clip-path':
							'polygon(0% 45%,16% 44%,33% 50%,54% 60%,70% 61%,84% 59%,100% 52%,100% 100%,0% 100%)'
					},
					'50%': {
						'clip-path':
							'polygon(0% 60%,15% 65%,34% 66%,51% 62%,67% 50%,84% 45%,100% 46%,100% 100%,0% 100%)'
					}
				},
				staranimation: {
					from: {
						transform: 'translateY(0px)'
					},
					to: {
						transform: 'translateY(-2000px)'
					}
				},
				imagebounce: {
					'0%': { transform: 'translateY(-20px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(-20px)' }
				}
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%'
			}
		}
	},
	plugins: [require('tailwind-hamburgers')]
};
