import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/lukadev-0/octocord",
  },
  docsRepositoryBase: "https://github.com/lukadev-0/octocord/blob/main/docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    const { title: defaultTitle, frontMatter } = useConfig();

    const title = frontMatter.title ?? `${defaultTitle} – Octocord`;

    return {
      title: title,
      description: frontMatter.description,
      openGraph: {
        url: `https://octocord.vercel.app${asPath}`,
        siteName: "Octocord",
        title: frontMatter.title ?? title,
      },
    };
  },
  footer: {
    text: (
      <div>
        <div className="mb-2 relative rounded text-white inline-flex items-center overflow-hidden space-x-px">
          <div
            aria-hidden="true"
            className="h-10 w-10 flex items-center justify-center bg-black"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 1155 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="white" />
            </svg>
          </div>

          <a
            className="flex items-center h-10 px-3 rounded-none after:absolute after:content-none after:inset-0 bg-black"
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com"
          >
            <span>
              Powered by <span className="font-medium">Vercel</span>
            </span>
          </a>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} LukaDev
        </p>

        <p className="text-sm text-gray-700 dark:text-gray-400">
          Built with{" "}
          <a
            href="https://nextra.site/"
            className=" text-gray-900 dark:text-gray-200"
          >
            Nextra
          </a>
          .
        </p>
      </div>
    ),
  },
  logo: (
    <span className="flex items-center space-x-3">
      <Logo aria-hidden="true" className="h-10 w-10" />
      <span className="font-medium text-lg dark:text-gray-100 text-gray-900">
        Octocord
      </span>
    </span>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  banner: {
    dismissible: false,
    text: "These docs are a proof of concept! Octocord is still in development.",
  },
};

export default config;
