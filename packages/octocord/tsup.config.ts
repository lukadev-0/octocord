import { Plugin } from "esbuild";
import { defineConfig, Format } from "tsup";
import { readdirSync } from "fs";
import { join } from "path/posix";
import { copyFile, cp, mkdir } from "fs/promises";
import rimraf from "rimraf";

const entries = ["build", "build-worker", "lib", "util"];

const exportsDir = "src/exports";
const exportFiles = readdirSync(exportsDir).map((v) => join(exportsDir, v));
const pathRegex = new RegExp(`^@/(${entries.join("|")})$`);

const resolvePlugin: Plugin = {
  name: "resolve-modules",
  setup(build) {
    build.onResolve({ filter: pathRegex }, (args) => {
      const match = pathRegex.exec(args.path);
      if (!match) throw Error("no match");
      const name = match[1];

      return {
        path: `../${name}/index.js`,
        external: true,
      };
    });

    build.onResolve({ filter: /^@\/discord$/ }, () => {
      return {
        path: "../discord/index.js",
        external: true,
      };
    });
  },
};

const base = {
  splitting: false,
  sourcemap: true,
  clean: false,
  esbuildPlugins: [resolvePlugin],
  format: ["esm"] as Format[],
};

export default defineConfig([
  {
    ...base,
    entry: Object.fromEntries(
      entries.map((v) => [`${v}/index`, `src/${v}/index.ts`]),
    ),
    outDir: "dist",
    dts: true,
    onSuccess: async () => {
      await new Promise<void>((resolve, reject) =>
        rimraf("./dist/discord", (err) => (err ? reject(err) : resolve())),
      );

      await mkdir("./dist/discord", { recursive: true });

      await copyFile(
        "../octocord-discord/index.d.ts",
        "./dist/discord/index.d.ts",
      );

      await cp("../octocord-discord/dist", "./dist/discord", {
        recursive: true,
      });
    },
  },
  {
    ...base,
    entry: exportFiles,
    outDir: "dist/exports",
    dts: true,
  },
  {
    ...base,
    entry: ["src/cli/index.ts"],
    outDir: "dist/cli",
    dts: false,
  },
]);
