import { ResolvedConfig } from "@/lib";

export interface BuildContext {
  projectDir: string;
  config: ResolvedConfig;
}
