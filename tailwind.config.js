/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "purple-bg": "#17192C",
                "btn-color": "#344DFF",
                "hover-txt": "#344DFF",
                "navbar-bg": "#0E0F1B",
                "title-color": "#CCDAE7",
                "card-color": "#11121F",
                "line-card": "#1A1C2F",
                "circle-num": "#6025DD",
            },
            maxWidth: {
                "max-w-txt": "25%",
                "1/2": "50%",
                "3/4": "75%",
            },
        },
        fontFamily: {
            bigfont: ["inter"],
        },
    },
    plugins: [],
};
