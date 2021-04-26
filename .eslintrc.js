module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
