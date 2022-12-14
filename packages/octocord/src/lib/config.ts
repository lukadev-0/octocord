import { RESTOptions } from "@discordjs/rest";

/**
 * The base interaction configuration
 */
export interface OctocordConfigInteractionsBase {
  commands?: string | boolean;
  components?: string | boolean;
  modals?: string | boolean;
}

export interface ResolvedConfigInteractionsBase {
  commands?: string;
  components?: string;
  modals?: string;
}

/**
 * Interaction configuration with type `gateway`
 */
export interface OctocordConfigInteractionsGateway
  extends OctocordConfigInteractionsBase {
  type: "gateway";
}

export interface ResolvedConfigInteractionsGateway
  extends ResolvedConfigInteractionsBase {
  type: "gateway";
}

/**
 * Interaction configuration with type `webhook`
 */
export interface OctocordConfigInteractionsWebhook
  extends OctocordConfigInteractionsBase {
  type: "webhook";
}

export interface ResolvedConfigInteractionsWebhook
  extends ResolvedConfigInteractionsBase {
  type: "webhook";
}

/**
 * Gateway configuration
 */
export interface OctocordConfigGateway {
  token: string;
}

export interface ResolvedConfigGateway {
  token: string;
}

/**
 * The base configuration
 */
export interface OctocordConfigBase {
  interaction?:
    | OctocordConfigInteractionsGateway
    | OctocordConfigInteractionsWebhook;
  rest?: RESTOptions;
  gateway?: OctocordConfigGateway;
  extensions?: string[];
}

export interface ResolvedConfigBase {
  interaction?:
    | ResolvedConfigInteractionsGateway
    | ResolvedConfigInteractionsWebhook;
  rest?: RESTOptions;
  gateway?: ResolvedConfigGateway;
  extensions: string[];
}

/**
 * The configuration with `interaction.type` set to `gateway`
 */
export interface OctocordConfigGatewayInteractions extends OctocordConfigBase {
  interaction: OctocordConfigInteractionsGateway;
  gateway: OctocordConfigGateway;
}

export interface ResolvedConfigGatewayInteractions extends ResolvedConfigBase {
  interaction: ResolvedConfigInteractionsGateway;
  gateway: ResolvedConfigGateway;
}

/**
 * The configuration with `interaction.type` set to `webhook`
 */
export interface OctocordConfigWebhookInteractions extends OctocordConfigBase {
  interaction: OctocordConfigInteractionsWebhook;
}

export interface ResolvedConfigWebhookInteractions extends ResolvedConfigBase {
  interaction: ResolvedConfigInteractionsWebhook;
}

/**
 * Config for Octocord
 */
export type OctocordConfig =
  | OctocordConfigGatewayInteractions
  | OctocordConfigWebhookInteractions
  | OctocordConfigBase;

export type ResolvedConfig =
  | ResolvedConfigGatewayInteractions
  | ResolvedConfigWebhookInteractions
  | ResolvedConfigBase;
