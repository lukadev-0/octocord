import chalk from "chalk";

export const createLogger = (
  style: (...text: unknown[]) => string,
  prefix: string,
) => {
  return (message: string) => console.log(`${style(prefix)} - ${message}`);
};

export const info = createLogger(chalk.blue, "info");
export const warn = createLogger(chalk.yellow, "warn");
export const error = createLogger(chalk.red, "error");
export const success = createLogger(chalk.green, "success");
