import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/lukadev-0/octocord",
  },
  docsRepositoryBase: "https://github.com/lukadev-0/octocord/blob/main/docs",
  getNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Octocord",
      };
    }
    return {};
  },
  footer: {
    text: `© ${new Date().getFullYear()} LukaDev`,
  },
  logo: (
    <>
      <span>Octocord</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
};

export default config;
