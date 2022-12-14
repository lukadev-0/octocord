import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import modify from "rollup-plugin-modify";
import terser from "@rollup/plugin-terser";
import { fileURLToPath } from "url";

// @rollup/plugin-terser uses __filename
// https://github.com/rollup/plugins/issues/1366#issuecomment-1345358157
const __filename = fileURLToPath(import.meta.url);
global["__filename"] = __filename;

const config = {
  input: "./index.js",
  plugins: [
    commonjs({
      ignoreGlobal: true,
    }),
    modify({
      find: "return eval(script)",
      replace: "return [eval][0](script)",
    }),
    json(),
    nodeResolve({ preferBuiltins: true }),
    terser(),
  ],
  output: {
    dir: "dist",
    format: "esm",
  },
};

export default config;
