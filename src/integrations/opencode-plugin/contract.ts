export const REAL_OPENCODE_EVENT_TYPES = [
  "message.updated",
  "message.part.updated",
  "session.idle",
  "session.deleted",
] as const;

export type RealOpenCodeEventType = (typeof REAL_OPENCODE_EVENT_TYPES)[number];

export const REGISTERED_OPENCODE_HOOKS = [
  "tool.execute.after",
  "event",
  "experimental.session.compacting",
] as const;
