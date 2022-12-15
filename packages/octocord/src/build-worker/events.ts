import { RollupOutput } from "rollup";

export interface BuildEvents {
  onError: (err: unknown) => void;
  onWarn: (message: string) => void;

  // Collecting Inputs
  onCollectingInputs: () => void;

  // Bundling
  onNoInputs: () => void;
  onBundleStart: () => void;
  onBundleFinish: (output: RollupOutput) => void;
}
