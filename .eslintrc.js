const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/require-default-props": 0,
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: {
              "@": path.resolve("src"),
              "@Components": path.resolve("src/Components"),
              "@Views": path.resolve("src/Views"),
              "@Router": path.resolve("src/Router"),
              "@plugin": path.resolve("src/plugin"),
              "@utile": path.resolve("src/utile"),
              "@style": path.resolve("src/style"),
              "@i18n": path.resolve("src/i18n"),
            },
          },
        },
      },
    },
  },
};
