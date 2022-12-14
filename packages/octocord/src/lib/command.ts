import {
  PermissionsBitField,
  ApplicationCommandOptionType,
  ChannelType,
  LocaleString,
} from "@/discord";

export { ApplicationCommandOptionType, ChannelType, type LocaleString };

export interface CommandMeta {
  /**
   * 1-100 character description for `CHAT_INPUT` commands.
   */
  description?: string;

  /**
   * The default permissions for this command.
   */
  defaultPermissions?: PermissionsBitField;

  /**
   * Whether this command is available within DMs.
   * @default true
   */
  dm?: boolean;

  /**
   * The options for this command
   */
  options?: CommandMetaOption[];

  /**
   * The localizations for this command
   */
  localizations?: Record<LocaleString, CommandMetaLocalization>;
}

export type CommandMetaOption =
  | CommandMetaOptionString
  | CommandMetaOptionNumberLike
  | CommandMetaOptionBase;

export interface CommandMetaOptionBase {
  /**
   * the type
   */
  type: ApplicationCommandOptionType;

  /**
   * 1-32 character name
   */
  name: string;

  /**
   * 1-100 character description
   */
  description: string;

  /**
   * whether or not this option is required
   */
  required?: boolean;
}

export interface CommandMetaOptionAutocompletable<T extends number | string>
  extends CommandMetaOptionBase {
  /**
   * Whether autocomplete is enabled
   */
  autocomplete?: boolean;

  /**
   * The choices for this option
   */
  choices: CommandMetaOptionChoice<T>;
}

export interface CommandMetaOptionString
  extends CommandMetaOptionAutocompletable<string> {
  type: ApplicationCommandOptionType.String;

  /**
   * The minimum length (number from 0 to 6000)
   */
  minLength?: string;

  /**
   * The maximum length (number from 0 to 6000)
   */
  maxLength?: string;
}

export interface CommandMetaOptionNumberLike
  extends CommandMetaOptionAutocompletable<number> {
  type:
    | ApplicationCommandOptionType.Number
    | ApplicationCommandOptionType.Integer;

  /**
   * The minimum value
   */
  minValue?: string;

  /**
   * The maximum value
   */
  maxValue?: string;
}

export interface CommandMetaOptionChannel {
  type: ApplicationCommandOptionType.Channel;

  /**
   * The allowed channel types
   */
  channelTypes: ChannelType;
}

export interface CommandMetaOptionChoice<T extends string | number> {
  /**
   * 1-100 character name
   */
  name: string;

  /**
   * Value for the choice, up to 100 characters if string
   */
  value: T;
}

// TODO: Implement Localization
export interface CommandMetaLocalization {
  name?: string;
  description?: string;
  options?: CommandMetaLocalizationOption[];
}

export interface CommandMetaLocalizationOption {
  name?: string;
  description?: string;
  choices?: CommandMetaLocalizationOptionChoice[];
}

export interface CommandMetaLocalizationOptionChoice {
  name?: string;
  value?: number | string;
}
