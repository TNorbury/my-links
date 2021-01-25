module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: "off",
    quotes: ["warn", "double"],
    "comma-dangle": ["warn", "only-multiline"],
    "space-before-function-paren": "off",
    "no-extra-semi": "warn",
    "vue/no-unused-components": "warn",
    "no-multiple-empty-lines": "warn",
  }
};
