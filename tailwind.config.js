/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'oswald': ['Oswald', 'sans-serif'],
				'Montserrat': ['Montserrat', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
