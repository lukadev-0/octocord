// @ts-check
import Nextra from "nextra";

const withNextra = Nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
});
