#!/usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";
import { resolve } from "path";

import build from "./commands/build";

const program = new Command("octocord");
const getProjectDir = (dir?: string) => resolve(dir ?? ".");

program
  .command("start")
  .argument(
    "[dir]",
    "The root directory of the bot, defaults to the current directory",
  )
  .description(
    "Starts the bot in production mode.\n" +
      "The bot should be compiled with `octocord build` first.",
  )
  .action(() => {
    console.log("start");
  });

program
  .command("dev", { isDefault: true })
  .argument(
    "[dir]",
    "The root directory of the bot, defaults to the current directory",
  )
  .description("Starts the bot in development mode.")
  .action(() => {
    console.log("dev");
  });

program
  .command("build")
  .argument(
    "[dir]",
    "The root directory of the bot, defaults to the current directory",
  )
  .description("Compiles the bot.")
  .action((dir) => {
    return build(getProjectDir(dir));
  });

program
  .command("push")
  .argument(
    "[dir]",
    "The root directory of the bot, defaults to the current directory",
  )
  .description("Pushes slash commands to Discord.")
  .action(() => {
    console.log("push");
  });

program.parseAsync().catch((err) => {
  console.error(err);

  console.error("");
  console.error(chalk.red("Unexpected Error: Check the logs above."));
});
