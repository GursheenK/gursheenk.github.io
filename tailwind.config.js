const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./_drafts/**/*.md",
        "./_includes/**/*.html",
        "./_layouts/**/*.html",
        "./_posts/*.md",
        "./*.{html,md}",
    ],
    safelist: ['*'],
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
