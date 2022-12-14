// "Root" classes (starting points)
export { default as BaseClient } from "discord.js/src/client/BaseClient";
export { default as Client } from "discord.js/src/client/Client";
export { default as Shard } from "discord.js/src/sharding/Shard";
export { default as ShardClientUtil } from "discord.js/src/sharding/ShardClientUtil";
export { default as ShardingManager } from "discord.js/src/sharding/ShardingManager";
export { default as WebhookClient } from "discord.js/src/client/WebhookClient";

// Errors
export {
  DiscordjsError,
  DiscordjsTypeError,
  DiscordjsRangeError,
} from "discord.js/src/errors/DJSError";
export { default as DiscordjsErrorCodes } from "discord.js/src/errors/ErrorCodes";

// Utilities
export { default as ActivityFlagsBitField } from "discord.js/src/util/ActivityFlagsBitField";
export { default as ApplicationFlagsBitField } from "discord.js/src/util/ApplicationFlagsBitField";
export { default as BaseManager } from "discord.js/src/managers/BaseManager";
export { default as BitField } from "discord.js/src/util/BitField";
export { default as ChannelFlagsBitField } from "discord.js/src/util/ChannelFlagsBitField";
export { Collection } from "@discordjs/collection";
export { default as Constants } from "discord.js/src/util/Constants";
export { default as Colors } from "discord.js/src/util/Colors";
export { default as DataResolver } from "discord.js/src/util/DataResolver";
export { default as Events } from "discord.js/src/util/Events";
export { default as Formatters } from "discord.js/src/util/Formatters";
export { default as IntentsBitField } from "discord.js/src/util/IntentsBitField";
export { default as LimitedCollection } from "discord.js/src/util/LimitedCollection";
export { default as MessageFlagsBitField } from "discord.js/src/util/MessageFlagsBitField";
export { default as Options } from "discord.js/src/util/Options";
export { default as Partials } from "discord.js/src/util/Partials";
export { default as PermissionsBitField } from "discord.js/src/util/PermissionsBitField";
export { default as ShardEvents } from "discord.js/src/util/ShardEvents";
export { default as Status } from "discord.js/src/util/Status";
export { DiscordSnowflake as SnowflakeUtil } from "@sapphire/snowflake";
export { default as Sweepers } from "discord.js/src/util/Sweepers";
export { default as SystemChannelFlagsBitField } from "discord.js/src/util/SystemChannelFlagsBitField";
export { default as ThreadMemberFlagsBitField } from "discord.js/src/util/ThreadMemberFlagsBitField";
export { default as UserFlagsBitField } from "discord.js/src/util/UserFlagsBitField";
export { default as WebSocketShardEvents } from "discord.js/src/util/WebSocketShardEvents";
export { version } from "discord.js/package.json";
export * from "discord.js/src/util/Util";

// Managers
export { default as ApplicationCommandManager } from "discord.js/src/managers/ApplicationCommandManager";
export { default as ApplicationCommandPermissionsManager } from "discord.js/src/managers/ApplicationCommandPermissionsManager";
export { default as AutoModerationRuleManager } from "discord.js/src/managers/AutoModerationRuleManager";
export { default as BaseGuildEmojiManager } from "discord.js/src/managers/BaseGuildEmojiManager";
export { default as CachedManager } from "discord.js/src/managers/CachedManager";
export { default as ChannelManager } from "discord.js/src/managers/ChannelManager";
export { default as ClientVoiceManager } from "discord.js/src/client/voice/ClientVoiceManager";
export { default as DataManager } from "discord.js/src/managers/DataManager";
export { default as GuildApplicationCommandManager } from "discord.js/src/managers/GuildApplicationCommandManager";
export { default as GuildBanManager } from "discord.js/src/managers/GuildBanManager";
export { default as GuildChannelManager } from "discord.js/src/managers/GuildChannelManager";
export { default as GuildEmojiManager } from "discord.js/src/managers/GuildEmojiManager";
export { default as GuildEmojiRoleManager } from "discord.js/src/managers/GuildEmojiRoleManager";
export { default as GuildForumThreadManager } from "discord.js/src/managers/GuildForumThreadManager";
export { default as GuildInviteManager } from "discord.js/src/managers/GuildInviteManager";
export { default as GuildManager } from "discord.js/src/managers/GuildManager";
export { default as GuildMemberManager } from "discord.js/src/managers/GuildMemberManager";
export { default as GuildMemberRoleManager } from "discord.js/src/managers/GuildMemberRoleManager";
export { default as GuildScheduledEventManager } from "discord.js/src/managers/GuildScheduledEventManager";
export { default as GuildStickerManager } from "discord.js/src/managers/GuildStickerManager";
export { default as GuildTextThreadManager } from "discord.js/src/managers/GuildTextThreadManager";
export { default as MessageManager } from "discord.js/src/managers/MessageManager";
export { default as PermissionOverwriteManager } from "discord.js/src/managers/PermissionOverwriteManager";
export { default as PresenceManager } from "discord.js/src/managers/PresenceManager";
export { default as ReactionManager } from "discord.js/src/managers/ReactionManager";
export { default as ReactionUserManager } from "discord.js/src/managers/ReactionUserManager";
export { default as RoleManager } from "discord.js/src/managers/RoleManager";
export { default as StageInstanceManager } from "discord.js/src/managers/StageInstanceManager";
export { default as ThreadManager } from "discord.js/src/managers/ThreadManager";
export { default as ThreadMemberManager } from "discord.js/src/managers/ThreadMemberManager";
export { default as UserManager } from "discord.js/src/managers/UserManager";
export { default as VoiceStateManager } from "discord.js/src/managers/VoiceStateManager";
export { default as WebSocketManager } from "discord.js/src/client/websocket/WebSocketManager";
export { default as WebSocketShard } from "discord.js/src/client/websocket/WebSocketShard";

// Structures
export { default as ActionRow } from "discord.js/src/structures/ActionRow";
export { default as ActionRowBuilder } from "discord.js/src/structures/ActionRowBuilder";
export { Activity } from "discord.js/src/structures/Presence";
export { default as AnonymousGuild } from "discord.js/src/structures/AnonymousGuild";
export { default as Application } from "discord.js/src/structures/interfaces/Application";
export { default as ApplicationCommand } from "discord.js/src/structures/ApplicationCommand";
export { default as AutocompleteInteraction } from "discord.js/src/structures/AutocompleteInteraction";
export { default as AutoModerationActionExecution } from "discord.js/src/structures/AutoModerationActionExecution";
export { default as AutoModerationRule } from "discord.js/src/structures/AutoModerationRule";
export { default as Base } from "discord.js/src/structures/Base";
export { default as BaseGuild } from "discord.js/src/structures/BaseGuild";
export { default as BaseGuildEmoji } from "discord.js/src/structures/BaseGuildEmoji";
export { default as BaseGuildTextChannel } from "discord.js/src/structures/BaseGuildTextChannel";
export { default as BaseGuildVoiceChannel } from "discord.js/src/structures/BaseGuildVoiceChannel";
export { default as ButtonBuilder } from "discord.js/src/structures/ButtonBuilder";
export { default as ButtonComponent } from "discord.js/src/structures/ButtonComponent";
export { default as ButtonInteraction } from "discord.js/src/structures/ButtonInteraction";
export { default as CategoryChannel } from "discord.js/src/structures/CategoryChannel";
export { BaseChannel } from "discord.js/src/structures/BaseChannel";
export { default as ChatInputCommandInteraction } from "discord.js/src/structures/ChatInputCommandInteraction";
export { default as ClientApplication } from "discord.js/src/structures/ClientApplication";
export { default as ClientPresence } from "discord.js/src/structures/ClientPresence";
export { default as ClientUser } from "discord.js/src/structures/ClientUser";
export { default as CommandInteraction } from "discord.js/src/structures/CommandInteraction";
export { default as Collector } from "discord.js/src/structures/interfaces/Collector";
export { default as CommandInteractionOptionResolver } from "discord.js/src/structures/CommandInteractionOptionResolver";
export { default as Component } from "discord.js/src/structures/Component";
export { default as ContextMenuCommandInteraction } from "discord.js/src/structures/ContextMenuCommandInteraction";
export { default as DMChannel } from "discord.js/src/structures/DMChannel";
export { default as Embed } from "discord.js/src/structures/Embed";
export { default as EmbedBuilder } from "discord.js/src/structures/EmbedBuilder";
export { Emoji } from "discord.js/src/structures/Emoji";
export { default as ForumChannel } from "discord.js/src/structures/ForumChannel";
export { Guild } from "discord.js/src/structures/Guild";
export { default as GuildAuditLogs } from "discord.js/src/structures/GuildAuditLogs";
export { default as GuildAuditLogsEntry } from "discord.js/src/structures/GuildAuditLogsEntry";
export { default as GuildBan } from "discord.js/src/structures/GuildBan";
export { default as GuildChannel } from "discord.js/src/structures/GuildChannel";
export { default as GuildEmoji } from "discord.js/src/structures/GuildEmoji";
export { GuildMember } from "discord.js/src/structures/GuildMember";
export { default as GuildPreview } from "discord.js/src/structures/GuildPreview";
export { default as GuildPreviewEmoji } from "discord.js/src/structures/GuildPreviewEmoji";
export { GuildScheduledEvent } from "discord.js/src/structures/GuildScheduledEvent";
export { default as GuildTemplate } from "discord.js/src/structures/GuildTemplate";
export { default as Integration } from "discord.js/src/structures/Integration";
export { default as IntegrationApplication } from "discord.js/src/structures/IntegrationApplication";
export { default as BaseInteraction } from "discord.js/src/structures/BaseInteraction";
export { default as InteractionCollector } from "discord.js/src/structures/InteractionCollector";
export { default as InteractionResponse } from "discord.js/src/structures/InteractionResponse";
export { default as InteractionWebhook } from "discord.js/src/structures/InteractionWebhook";
export { default as Invite } from "discord.js/src/structures/Invite";
export { default as InviteStageInstance } from "discord.js/src/structures/InviteStageInstance";
export { default as InviteGuild } from "discord.js/src/structures/InviteGuild";
export { Message } from "discord.js/src/structures/Message";
export { default as Attachment } from "discord.js/src/structures/Attachment";
export { default as AttachmentBuilder } from "discord.js/src/structures/AttachmentBuilder";
export { default as ModalBuilder } from "discord.js/src/structures/ModalBuilder";
export { default as MessageCollector } from "discord.js/src/structures/MessageCollector";
export { default as MessageComponentInteraction } from "discord.js/src/structures/MessageComponentInteraction";
export { default as MessageContextMenuCommandInteraction } from "discord.js/src/structures/MessageContextMenuCommandInteraction";
export { default as MessageMentions } from "discord.js/src/structures/MessageMentions";
export { default as MessagePayload } from "discord.js/src/structures/MessagePayload";
export { default as MessageReaction } from "discord.js/src/structures/MessageReaction";
export { default as ModalSubmitInteraction } from "discord.js/src/structures/ModalSubmitInteraction";
export { default as ModalSubmitFields } from "discord.js/src/structures/ModalSubmitFields";
export { default as NewsChannel } from "discord.js/src/structures/NewsChannel";
export { default as OAuth2Guild } from "discord.js/src/structures/OAuth2Guild";
export { default as PartialGroupDMChannel } from "discord.js/src/structures/PartialGroupDMChannel";
export { default as PermissionOverwrites } from "discord.js/src/structures/PermissionOverwrites";
export { Presence } from "discord.js/src/structures/Presence";
export { default as ReactionCollector } from "discord.js/src/structures/ReactionCollector";
export { default as ReactionEmoji } from "discord.js/src/structures/ReactionEmoji";
export { RichPresenceAssets } from "discord.js/src/structures/Presence";
export { Role } from "discord.js/src/structures/Role";
export { default as SelectMenuBuilder } from "discord.js/src/structures/SelectMenuBuilder";
export { default as ChannelSelectMenuBuilder } from "discord.js/src/structures/ChannelSelectMenuBuilder";
export { default as MentionableSelectMenuBuilder } from "discord.js/src/structures/MentionableSelectMenuBuilder";
export { default as RoleSelectMenuBuilder } from "discord.js/src/structures/RoleSelectMenuBuilder";
export { default as StringSelectMenuBuilder } from "discord.js/src/structures/StringSelectMenuBuilder";
export { default as UserSelectMenuBuilder } from "discord.js/src/structures/UserSelectMenuBuilder";
export { default as BaseSelectMenuComponent } from "discord.js/src/structures/BaseSelectMenuComponent";
export { default as SelectMenuComponent } from "discord.js/src/structures/SelectMenuComponent";
export { default as ChannelSelectMenuComponent } from "discord.js/src/structures/ChannelSelectMenuComponent";
export { default as MentionableSelectMenuComponent } from "discord.js/src/structures/MentionableSelectMenuComponent";
export { default as RoleSelectMenuComponent } from "discord.js/src/structures/RoleSelectMenuComponent";
export { default as StringSelectMenuComponent } from "discord.js/src/structures/StringSelectMenuComponent";
export { default as UserSelectMenuComponent } from "discord.js/src/structures/UserSelectMenuComponent";
export { default as SelectMenuInteraction } from "discord.js/src/structures/SelectMenuInteraction";
export { default as ChannelSelectMenuInteraction } from "discord.js/src/structures/ChannelSelectMenuInteraction";
export { default as MentionableSelectMenuInteraction } from "discord.js/src/structures/MentionableSelectMenuInteraction";
export { default as RoleSelectMenuInteraction } from "discord.js/src/structures/RoleSelectMenuInteraction";
export { default as StringSelectMenuInteraction } from "discord.js/src/structures/StringSelectMenuInteraction";
export { default as UserSelectMenuInteraction } from "discord.js/src/structures/UserSelectMenuInteraction";
export { default as SelectMenuOptionBuilder } from "discord.js/src/structures/SelectMenuOptionBuilder";
export { default as StringSelectMenuOptionBuilder } from "discord.js/src/structures/StringSelectMenuOptionBuilder";
export { default as StageChannel } from "discord.js/src/structures/StageChannel";
export { StageInstance } from "discord.js/src/structures/StageInstance";
export { Sticker } from "discord.js/src/structures/Sticker";
export { default as StickerPack } from "discord.js/src/structures/StickerPack";
export { default as Team } from "discord.js/src/structures/Team";
export { default as TeamMember } from "discord.js/src/structures/TeamMember";
export { default as TextChannel } from "discord.js/src/structures/TextChannel";
export { default as TextInputBuilder } from "discord.js/src/structures/TextInputBuilder";
export { default as TextInputComponent } from "discord.js/src/structures/TextInputComponent";
export { default as ThreadChannel } from "discord.js/src/structures/ThreadChannel";
export { default as ThreadMember } from "discord.js/src/structures/ThreadMember";
export { default as Typing } from "discord.js/src/structures/Typing";
export { default as User } from "discord.js/src/structures/User";
export { default as UserContextMenuCommandInteraction } from "discord.js/src/structures/UserContextMenuCommandInteraction";
export { default as VoiceChannel } from "discord.js/src/structures/VoiceChannel";
export { default as VoiceRegion } from "discord.js/src/structures/VoiceRegion";
export { default as VoiceState } from "discord.js/src/structures/VoiceState";
export { default as Webhook } from "discord.js/src/structures/Webhook";
export { default as Widget } from "discord.js/src/structures/Widget";
export { default as WidgetMember } from "discord.js/src/structures/WidgetMember";
export { default as WelcomeChannel } from "discord.js/src/structures/WelcomeChannel";
export { default as WelcomeScreen } from "discord.js/src/structures/WelcomeScreen";
export { default as WebSocket } from "discord.js/src/WebSocket";

export * from "discord-api-types/v10";
export * from "@discordjs/builders";
export * from "@discordjs/rest";
export * from "@discordjs/util";
