/**
 * Returns true if the given value is a SystemError
 */
export function isSystemError(e: unknown): e is NodeJS.ErrnoException {
  return e instanceof Error && "errno" in e;
}
