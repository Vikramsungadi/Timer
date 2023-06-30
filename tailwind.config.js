/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#6c3e77",
			},
			keyframes: {
				scaleUp: {
					"0%": { scale: "3", opacity: "0.5", "background-color": "red" },
					"15%": { scale: "1", opacity: "1" },
					"100%": { "background-color": "white" },
				},
			},
			animation: {
				scaleUp: "scaleUp 10s ease-out ",
			},
		},
	},
	plugins: [],
};
