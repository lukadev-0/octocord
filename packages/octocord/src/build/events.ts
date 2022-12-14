import { RollupOutput } from "rollup";

export interface BuildEvents {
  onError: (err: unknown) => void;
  onCommandAdded: (command: string) => void;
  onBundleStart: () => void;
  onBuildFinish: (output: RollupOutput) => void;
  onNoInputs: () => void;
  onWarn: (message: string) => void;
}
