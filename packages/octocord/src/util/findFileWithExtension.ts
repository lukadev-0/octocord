import { PathLike, Dirent } from "fs";
import { basename } from "path";

export function findFileWithExtension<
  T extends Dirent | PathLike,
  TNames extends string,
>(files: T[], names: TNames[], extensions: string[]): Record<TNames, string> {
  const results = {} as Record<TNames, string>;
  for (const file of files) {
    const isFile = file instanceof Dirent ? file.isFile() : true;
    const fileName = file instanceof Dirent ? file.name : (file as string);
    if (isFile) {
      for (const name of names) {
        if (basename(fileName).startsWith(name + ".")) {
          for (const ext of extensions) {
            if (fileName === `${name}.${ext}`) {
              results[name] = fileName;
            }
          }
        }
      }
    }
  }
  return results;
}
