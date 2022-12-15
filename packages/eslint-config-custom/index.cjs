module.exports = {
  extends: [
    "plugin:mdx/recommended",
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
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.mdx"],
      parser: "eslint-mdx",
    },
  ],
};
