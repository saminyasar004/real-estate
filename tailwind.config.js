/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html", // Add this line to cover the main HTML file
        "./src/**/*.{js,ts,jsx,tsx}", // Ensure you cover all React files
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },

            colors: {
                orange: "#ff7900",
                darkred: "#eb410d",
                skyblue: "#38a9ff",
                blue: "#04419d",
                gray: "#999999",
            },
            backgroundImage: {
                topHeaderGradiant:
                    "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(0, 0, 106, 1) 35%,rgba(6, 123, 147, 1)100%)",
                heroBanner: "url('/src/assets/images/hero-banner.png')",
            },
            width: {
                "row-sm": "calc(100% - 2rem)",
                row: "calc(100% - 10rem)",
                100: "30rem",
            },
            height: {
                "0-2rem": "0.2rem",
            },
            borderWidth: {
                "2rem": "0.125rem",
                "1rem": "0.1rem",
                "1-2rem": "0.120rem",
            },
            lineHeight: {
                12: "4rem",
            },
        },
    },
    plugins: [],
};
