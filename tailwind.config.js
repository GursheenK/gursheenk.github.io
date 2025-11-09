const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./_site/**/*.html",
        "./_site/**/*.js",
        "./_layouts/**/*.html",
        "./_includes/**/*.html",
        "./_blogposts/**/*.{html,md}",
        "./pages/**/*.{html,md}",
        "./*.{html,md,js}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#121212",
                secondary: "#30475E",
                line: "#FFDEDE",
                accent: "#FF0B55",
                surface: "#FFFFFF",
            },
            fontFamily: {
                sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
