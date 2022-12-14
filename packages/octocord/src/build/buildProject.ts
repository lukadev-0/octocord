import { BuildContext } from "./context";
import { BuildEvents } from "./events";
import { Worker } from "worker_threads";
import { RollupOutput } from "rollup";

/**
 * Builds the project, creates a Worker thread that loads `build-worker`.
 */
export async function buildProject(
  context: BuildContext,
  events?: Partial<BuildEvents>,
) {
  return new Promise<RollupOutput | void>((resolve, reject) => {
    const worker = new Worker(
      new URL("../build-worker/index.js", import.meta.url),
      {
        workerData: {
          context,
        },
      },
    );

    worker.on(
      "message",
      <K extends keyof BuildEvents>(data: [K, Parameters<BuildEvents[K]>]) => {
        const [event, args] = data;

        if (event === "onBuildFinish") {
          resolve(args[0] as RollupOutput);
        }

        if (event === "onNoInputs") {
          resolve();
        }

        if (event === "onError") {
          reject(args[0]);
        }

        (events?.[event] as (...args: unknown[]) => void)?.(...args);
      },
    );

    worker.on("error", reject);

    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}
