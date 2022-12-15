import { BuildContext } from "./context";
import { BuildEvents } from "../build-worker/events";
import { Worker } from "worker_threads";

/**
 * Builds the project, starts a separate worker to run the build.
 */
export async function buildProject(
  context: BuildContext,
  events?: Partial<BuildEvents>,
) {
  return new Promise<void>((resolve, reject) => {
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

        if (event === "onError") {
          reject(args[0]);
        }

        (events?.[event] as (...args: unknown[]) => void)?.(...args);
      },
    );

    worker.on("error", reject);

    worker.on("exit", (code) => {
      if (code !== 0)
        return reject(new Error(`Worker stopped with exit code ${code}`));

      return resolve();
    });
  });
}
