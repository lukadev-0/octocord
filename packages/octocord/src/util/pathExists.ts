import { PathLike } from "fs";
import { access } from "fs/promises";

export async function pathExists(path: PathLike) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
