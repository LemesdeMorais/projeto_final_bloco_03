/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00C5A6",        // cor principal
                "primary-light": "#2BD998",
                "primary-dark": "#0081B1",
                secondary: "#0098B5",
                accent: "#0069A4",
            },
            backgroundImage: {
                "gradient-main":
                    "linear-gradient(90deg, #2BD998, #00C5A6, #00AFB1, #0098B5, #0081B1, #0069A4)",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-6px)" },
                },
                shimmer: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                shimmer: "shimmer 2s linear infinite",
            },
        },
    },
    plugins: [],
};
