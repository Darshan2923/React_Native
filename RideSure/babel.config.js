module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        plugins: [
            [
                "module:react-native-dotenv",
                {
                    moduleName: "@env",
                    path: ".env",
                },
            ],
        ],
    };
};
