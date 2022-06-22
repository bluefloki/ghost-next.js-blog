/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					500: '#1F69FF',
					300: '#4785FF'
				}
			}
		}
	},
	plugins: []
};
