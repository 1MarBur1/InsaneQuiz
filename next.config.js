module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: ['@svgr/webpack'],
		});

		return config;
	},
	images: {
		domains: ['ithogwarts.ru', 'i.ytimg.com'],
	},
	experimental: {
		outputStandalone: true,
	},
};

