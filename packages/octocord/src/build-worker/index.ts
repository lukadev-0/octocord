import {
  isMainThread,
  workerData as rawWorkerData,
  parentPort,
} from "worker_threads";
import { BuildContext, BuildEvents, inputCommands } from "@/build";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { join } from "path";
import { InputOption, OutputOptions, rollup, RollupOptions } from "rollup";

if (isMainThread) {
  throw new Error("`build-worker` should not be running in main thread.");
}

interface WorkerData {
  context: BuildContext;
}

function getInputOptions(input: InputOption): RollupOptions {
  return {
    onwarn: (log) => {
      postEvent("onWarn", log.message);
    },

    input,
    plugins: [
      nodeResolve(),
      commonjs({ ignoreGlobal: true }),
      // sucrase({
      //   transforms: ["typescript"],
      // }),
      json(),
    ],
  };
}

function getOutputOptions(context: BuildContext): OutputOptions {
  return {
    dir: join(context.projectDir, ".octocord"),
    entryFileNames: "[name].mjs",
    chunkFileNames: "chunks/[hash].mjs",
    format: "esm",
  };
}

const workerData = rawWorkerData as WorkerData;
const { context } = workerData;

const input: Record<string, string> = {};

function postEvent<T extends keyof BuildEvents>(
  event: T,
  ...args: Parameters<BuildEvents[T]>
) {
  parentPort?.postMessage([event, args]);
}

async function bundle(context: BuildContext, input: InputOption) {
  const inputOptions = getInputOptions(input);
  const outputOptions = getOutputOptions(context);

  let bundle;
  try {
    bundle = await rollup(inputOptions);
    return await bundle.write(outputOptions);
  } finally {
    bundle?.close();
  }
}

async function main() {
  await Promise.all([
    inputCommands(context, {
      addCommand: (command) => {
        input[`commands/${command.name}/command`] = command.commandFilePath;
        input[`commands/${command.name}/meta`] = command.metaFilePath;
      },
    }),
  ]);

  if (Object.entries(input).length === 0) {
    return postEvent("onNoInputs");
  }

  postEvent("onBundleStart");
  const output = await bundle(context, input);
  postEvent("onBuildFinish", output);
}

main().catch((err) => {
  postEvent("onError", err);
});
