const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");

const path = require("path");
const runtimeCaching = require("next-pwa/cache");
// const generateRobotsTxt = require("./scripts/generate-robots-txt");

let nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    env: {
        NEXT_ENV: process.env.NEXT_ENV,
        NEXT_ENDPOINT: process.env.NEXT_ENDPOINT,
        NEXT_API_ENDPOINT: process.env.NEXT_API_ENDPOINT,
    },
    poweredByHeader: false,
    future: {},
    images: {
        domains: ["mdbcdn.b-cdn.net"], // Add your image domains here
    },
    webpack(config, { isServer }) {
        // if (isServer) {
        //     generateRobotsTxt();
        // }
        return config;
    },
    // async redirects() {
    //     return [
    //         {
    //             source: "/",
    //             destination: "/login",
    //             permanent: false,
    //         },
    //     ];
    // },
};

if (process.env.NEXT_ENV !== "local") {
    nextConfig.pwa = {
        dest: "public",
        runtimeCaching,
    };
    const withPWA = require("next-pwa");
    nextConfig = withPWA(nextConfig);
}

const plugins = [
    [
        withLess,
        {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        "primary-color": "#CB0000",
                        "link-color": "#146EB4",
                        "success-color": "#6DB324",
                        "warning-color": "#F26B1D",
                        "error-color": "#FD6060",
                        "font-size-base": "14px",
                        "heading-color": "#000000",
                        "text-color": "#000000",
                        "text-color-secondary": "#12263F",
                        "disabled-color": "#ef5674",
                        "border-radius-base": "3px",
                        "border-color-base": "#9ea2a7",
                    },
                },
            },
        },
    ],
];

module.exports = withPlugins(plugins, nextConfig);
