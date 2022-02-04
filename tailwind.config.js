module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'black': '#272727',
				'primary': 'linear-gradient(92.52deg, #4F9EFD 0%, #1635D6 100%)',
				'staticPrimary': '#336BEA',
				'mediumGray': '#DDDDDD',
				'darkGray': '#767373',
				'lightGray': '#F8F8F8',
				'green': '#73C66E',
				'red': '#FF5151',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(92.52deg, #4F9EFD 0%, #1635D6 100%)',
			},
			boxShadow: {
				'main': '5px 5px 25px 0 rgba(159, 159, 159, 0.15);',
			},
		},
	},
	plugins: [],
};
