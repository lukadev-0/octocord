module.exports = {
  extends: [
    "mdx",
    "next",
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};
