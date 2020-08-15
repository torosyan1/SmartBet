module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react","prettier"],
  rules: {
    "react/prop-types": 0,
    "prettier/prettier": [
            "error",
            {
                "singleQuote": true
            }]},
  parser: "babel-eslint"
};
