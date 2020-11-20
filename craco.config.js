const path = require(`path`);
const CracoLessPlugin = require("craco-less");

const aliasCreator = (prefix = `src`) => ({
  "@Components": `${prefix}/Components`,
  "@Views": `${prefix}/Views`,
  "@Router": `${prefix}/Router`,
  "@plugin": `${prefix}/plugin`,
  "@utile": `${prefix}/utile`,
  "@style": `${prefix}/style`,
  "@i18n": `${prefix}/i18n`,
});

const aliases = aliasCreator();

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = {
  eslint: {
    enable: true /* (default value) */,
    mode: "extends" /* (default value) */ || "file",
    /* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */
    configure: (eslintConfig, { env, paths }) => {
      return eslintConfig;
    },
    /* Any eslint-loader configuration options: https://github.com/webpack-contrib/eslint-loader. */
    loaderOptions: (eslintOptions, { env, paths }) => {
      return eslintOptions;
    },
  },
  webpack: {
    alias: resolvedAliases,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
