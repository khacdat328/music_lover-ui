/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
	content: ["./src/**/*.{js,jsx}", "./public/index.html"],

	theme: {
		extend: {
			// custom user configuration
			bgGradientDeg: {
				117: "117deg",
			},
			boxShadow: {
				bottomShadow: "0 10px 10px 9px blue",
				headerBottom: "0 3px 5px rgb(0 0 0 / 0.1)",
				popper: "0 2px 5px rgb( 0 0 0 / 0.2)",
			},
			colors: {
				primary: "#FFFFFF",
				secondary: "#ffffff80",
				alpha: "#ffffff1a",
				"link-hover": "#c273ed",
				primaryBg: "#34224f",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-gradient": (angle) => ({
						"background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
					}),
				},
				{
					// values from config and defaults you wish to use most
					values: Object.assign(
						theme("bgGradientDeg", {}), // name of config key. Must be unique
						{
							10: "10deg", // bg-gradient-10
							15: "15deg",
							20: "20deg",
							25: "25deg",
							30: "30deg",
							45: "45deg",
							60: "60deg",
							90: "90deg",
							120: "120deg",
							135: "135deg",
						}
					),
				}
			)
		}),
		require("tailwindcss/plugin")(({ addVariant }) => {
			addVariant("foo", "&:has(button:focus)")
		}),
		require("@tailwindcss/line-clamp"),
	],
}
