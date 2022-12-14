import { safeReadDirWithFileTypes, findFileWithExtension } from "@/util";

import { join, resolve } from "path";
import { BuildContext } from "./context";

export interface InputCommand {
  path: string;
  name: string;
  commandFilePath: string;
  metaFilePath: string;
}

export interface InputCommandCallbacks {
  addCommand: (command: InputCommand) => void;
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

export async function inputCommands(
  context: BuildContext,
  callbacks: InputCommandCallbacks,
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
