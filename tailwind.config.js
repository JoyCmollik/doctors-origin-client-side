module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#0E63F4',
				secondary: '#D9E6FA',
				main: '#2F3C6C',
				light: '#EBF1FF',
				dark: '#065BFC',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
