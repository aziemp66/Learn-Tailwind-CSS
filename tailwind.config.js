module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 3s linear infinite",
				wiggle: "wiggle 0.5s ease-in-out infinite",
			},
			spacing: {
				13: "3.5rem",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				wpu: "#bada55",
				kopi: "#c0ffee",
			},
			keyframes: {
				wiggle: {
					"0%": {
						transform: "rotate(-10deg)",
					},
					"50%": {
						transform: "rotate(10deg)",
					},
					"100%": {
						transform: "rotate(-10deg)",
					},
				},
			},
		},
	},
	plugins: [],
};
