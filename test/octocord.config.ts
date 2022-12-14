import { OctocordConfig } from "octocord";

export const config: OctocordConfig = {
  interaction: {
    type: "gateway",
    commands: true,
  },
  gateway: {
    token: "hi",
  },
};
