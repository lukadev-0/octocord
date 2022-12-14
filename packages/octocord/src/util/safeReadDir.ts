import { Dirent, PathLike } from "fs";
import { readdir } from "fs/promises";
import { isSystemError } from "./isSystemError";

/**
 * Returns the contents of a directory, or an empty array if the directory
 * does not exist.
 *
 * @returns
 * A tuple containg the contents of a directory and a boolean specifying
 * whether or not the directory exists
 */
export async function safeReadDir(
  path: PathLike,
): Promise<[contents: string[], exists: boolean]> {
  try {
    return [await readdir(path), true];
  } catch (err) {
    if (isSystemError(err) && err.code === "ENOENT") return [[], false];
    throw err;
  }
}

/**
 * Returns the contents of a directory, or an empty array if the directory
 * does not exist.
 *
 * @returns
 * A tuple containg an array of `fs.Dirent` objects and a boolean specifying
 * whether or not the directory exists
 */
export async function safeReadDirWithFileTypes(
  path: PathLike,
): Promise<[contents: Dirent[], exists: boolean]> {
  try {
    return [await readdir(path, { withFileTypes: true }), true];
  } catch (err) {
    if (isSystemError(err) && err.code === "ENOENT") return [[], false];
    throw err;
  }
}
