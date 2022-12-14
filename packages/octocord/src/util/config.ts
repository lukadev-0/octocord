import { bundleRequire } from "bundle-require";
import { OctocordConfig, ResolvedConfig } from "@/lib";
import { join } from "path";
import { pathExists } from "./pathExists";

const CONFIG_NAMES = ["mjs", "cjs", "ts", "js", "tsx", "jsx"].map(
  (v) => `octocord.config.${v}`,
);

export async function getProjectConfigPath(
  projectDir: string,
): Promise<string | undefined> {
  let configName;
  for (const possibleName of CONFIG_NAMES) {
    if (await pathExists(join(projectDir, possibleName))) {
      configName = possibleName;
    }
  }

  return configName && join(projectDir, configName);
}

function pathWithDefault(
  configPath: string,
  path: string | boolean | undefined,
  defaultPath: string,
): string | undefined {
  if (typeof path === "string") return path;
  if (path === true) return defaultPath;
  if (path === undefined || path === false) return undefined;
  if (path === false) return undefined;

  throw new Error(
    `\`${configPath}\` should be a string, boolean or undefined, received \`${typeof configPath}\``,
  );
}

function assertType<T>(path: string, type: string, value: T): T {
  if (typeof value !== type)
    throw new Error(
      `\`${path}\` should be of type \`${type}\`, received \`${type}\``,
    );
  return value;
}

export function resolveConfig(config: OctocordConfig): ResolvedConfig {
  const gateway = config.gateway;
  const interaction = "interaction" in config ? config.interaction : undefined;

  if (interaction) {
    if (interaction.type === "gateway" && !gateway) {
      throw new Error(
        "`gateway` is required when `interaction.type` is set to 'gateway'",
      );
    }
  }

  return {
    interaction: interaction && {
      type: interaction.type,
      commands: pathWithDefault(
        "interaction.commands",
        interaction.commands,
        "src/commands",
      ),
      components: pathWithDefault(
        "interaction.components",
        interaction.components,
        "src/components",
      ),
      modals: pathWithDefault(
        "interaction.modals",
        interaction.modals,
        "src/modals",
      ),
    },
    gateway: gateway && {
      token: assertType("gateway.token", "string", gateway.token),
    },
    rest: config.rest,
    extensions: config.extensions ?? ["js", "jsx", "ts", "tsx", "mjs", "cjs"],
  };
}

export async function loadConfigFromPath(
  configPath: string,
  octocordDir?: string,
): Promise<ResolvedConfig> {
  const { mod } = await bundleRequire({
    filepath: configPath,
    format: "esm",
    getOutputFile: octocordDir
      ? () => {
          return join(octocordDir, "_bundled_config_.mjs");
        }
      : undefined,
  });

  return resolveConfig((mod.config ?? mod.default) as OctocordConfig);
}
