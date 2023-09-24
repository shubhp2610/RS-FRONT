module.exports = {
    content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    mode: "jit",
    theme: {
        extend: {
            boxShadow: {
                "4xl": "3px 0px 30px #9EA2A74D",
            },
            width: {
                45: "45%",
                23: "23%",
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            primary: "#146EB4",
            secondary: "#12263F",
            pink: "#FF7885",
            success: "#6DB324",
            orange: "#ECA500",
            blue: "#2A7FFF",
            green: "#2CBB52",
            black: "#000",
            grey: "#5E6268",
            "grey-100": "#E1E2E4",
            "grey-200": "#F9F9F9",
            "grey-300": "#EFEFEF",
            "grey-400": "#EFEFEF",
            "grey-500": "#CCD0DC",
            "grey-600": "#9EA2A7",
            "grey-700": "#dddee2",
            "grey-800": "#797C84",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
