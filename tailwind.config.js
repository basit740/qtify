module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#34C94B', // Replace with your primary color code
				secondary: '#121212', // Replace with your secondary color code
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				'audio-player': '0px -2px 6px 0px rgba(255, 255, 255, 0.35)',
			},
		},
	},
	plugins: [],
};
