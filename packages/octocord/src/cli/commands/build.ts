import { buildProject } from "@/build";
import chalk from "chalk";
import ora from "ora";
import { loadConfig } from "../loadConfig";

export default async function build(dir: string) {
  const { config } = await loadConfig(dir);

  const context = {
    config,
    projectDir: dir,
  };

  const spinner = ora({
    text: "collecting inputs",
    color: "blue",
  });

  spinner.start();

  const logInfo = (str: string) => {
    spinner.clear();
    console.log(`${chalk.blue("info")} - ${str}`);
  };

  const logWarn = (str: string) => {
    spinner.clear();
    console.log(`${chalk.yellow("warn")} - ${str}`);
  };

  try {
    const result = await buildProject(context, {
      onBundleStart: () => {
        spinner.text = "building bot";
      },

      onCommandAdded: (command) => {
        logInfo(`building command ${chalk.blue(command)}`);
      },

      onWarn: (message) => {
        logWarn(message);
      },
    });

    spinner.stop();

    if (result) {
      const { output: outputs } = result;
      for (const output of outputs) {
        logInfo(`written ${chalk.blue(output.fileName)}`);
      }

      console.log(`${chalk.green("success")} - build completed`);
    } else {
      console.log(`${chalk.yellow("warn")} - nothing to build`);
    }
  } catch (e) {
    spinner.stop();

    console.error(e);
    console.error(chalk.red("\nAn error occurred whilst building the bot."));
    process.exit(1);
  }
}
