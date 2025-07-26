const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./_drafts/**/*.md",
        "./_includes/**/*.html",
        "./_layouts/**/*.html",
        "./_posts/*.md",
        "./*.{html,md}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
