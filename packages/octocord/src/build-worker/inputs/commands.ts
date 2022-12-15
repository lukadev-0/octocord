import { safeReadDirWithFileTypes, findFileWithExtension } from "@/util";

import { join, resolve } from "path";
import { BuildContext } from "@/build";

export interface CommandInput {
  path: string;
  name: string;
  commandFilePath: string;
  metaFilePath: string;
}

export interface CommandInputCallbacks {
  addCommand: (command: CommandInput) => void;
}

async function getCommandFiles(context: BuildContext, path: string) {
  const [files] = await safeReadDirWithFileTypes(path);
  const result = findFileWithExtension(
    files,
    ["command", "meta"],
    context.config.extensions,
  );

  if (result.meta && result.command) return result;
  return undefined;
}

export async function commandInput(
  context: BuildContext,
  callbacks: CommandInputCallbacks,
) {
  const commandsDir = context.config.interaction?.commands;
  if (!commandsDir) return;

  const [commands] = await safeReadDirWithFileTypes(
    resolve(context.projectDir, commandsDir),
  );

  for (const command of commands) {
    const path = join(commandsDir, command.name);
    if (command.isDirectory()) {
      const files = await getCommandFiles(context, path);
      if (files) {
        callbacks.addCommand({
          path,
          name: command.name,
          commandFilePath: join(path, files.command),
          metaFilePath: join(path, files.meta),
        });
      }
    }
  }
}
