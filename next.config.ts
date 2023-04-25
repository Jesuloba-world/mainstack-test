/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config: any) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["flagsapi.com"],
	},
};

module.exports = nextConfig;
