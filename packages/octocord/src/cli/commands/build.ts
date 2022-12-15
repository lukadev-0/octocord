import { buildProject } from "@/build";
import { loadConfig } from "../loadConfig";
import { error, info, success, warn } from "../log";
import ora from "ora";
import chalk from "chalk";

const BUILD_TASKS = 2;
const formatBuildTaskLog = (n: number, msg: string) =>
  `${chalk.gray(`(${n}/${BUILD_TASKS})`)} ${msg}`;

export default async function build(dir: string) {
  const { config } = await loadConfig(dir);

  const context = {
    config,
    projectDir: dir,
  };

  info("creating a production build");

  const spinner = ora({
    text: "starting build worker",
    color: "blue",
  });

  spinner.start();

  try {
    await buildProject(context, {
      onCollectingInputs: () => {
        spinner.clear();
        info("build worker started");
        console.log("");

        spinner.text = formatBuildTaskLog(1, "collecting files");
      },

      onBundleStart: () => {
        spinner.clear();
        info(formatBuildTaskLog(1, "collected files"));

        spinner.text = formatBuildTaskLog(2, "bundling files");
      },

      onWarn: (message) => {
        spinner.clear();
        warn(message);
      },

      onNoInputs: () => {
        spinner.stop();
        error("nothing to build");

        process.exit(1);
      },
    });

    spinner.stop();
    info(formatBuildTaskLog(2, "bundle complete"));

    console.log("");
    success("build complete");
  } catch (e) {
    spinner.stop();

    console.error(e);
    console.error(chalk.red("\nAn error occurred whilst building the bot."));
    process.exit(1);
  }
}
