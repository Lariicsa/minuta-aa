/** @format */
/* eslint-env node */
module.exports = {
	content: [
		// Example content paths...
		"./public/**/*.html",
		"./src/**/*.{js,jsx,ts,tsx,vue}",
	],
	theme: {
		extend: {
      boxShadow: {
        'shadow-lg': '4 4 70px rgba(0, 0, 0, 0.9)',
      }
    },
		colors: {
      black: "#0E0E0F",
			blue: "#101C85",
      "grey-dark": "#393737",
			white: "#FFFFFF",
		},
	},
	fontfamily: {
		body: ["Montserrat"],
	},
	
	// ...


	
};
