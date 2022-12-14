import { getProjectConfigPath, loadConfigFromPath } from "@/util";
import chalk from "chalk";
import { mkdir } from "fs/promises";
import { join, relative } from "path";

export async function loadConfig(projectDir: string) {
  try {
    const configPath = await getProjectConfigPath(projectDir);
    if (!configPath) {
      console.error(chalk.red("error - failed to find config"));
      process.exit(1);
    }

    const octocordDir = join(projectDir, ".octocord");
    await mkdir(octocordDir, { recursive: true });

    const relativeConfigPath = relative(projectDir, configPath);

    const config = await loadConfigFromPath(configPath, octocordDir);
    console.log(
      `${chalk.blue("info")} - loaded config from ${chalk.blue(
        relativeConfigPath,
      )}`,
    );

    return { config, octocordDir };
  } catch (e) {
    console.error(e);
    console.error(
      chalk.red(
        "\nAn error occurred whilst loading the config file. Check the logs above.\n",
      ),
    );

    process.exit(1);
  }
}
