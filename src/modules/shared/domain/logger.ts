interface MessageWithContext {
  message: string
  context: Record<string, unknown>
  [key: string]: unknown
}

type SimpleMessage = string

export type Message = SimpleMessage | MessageWithContext

export interface Logger {
  child: (bindings: Record<string, unknown>) => Logger;
  error: (message: Message) => void;
  warn: (message: Message) => void;
  info: (message: Message) => void;
  http: (message: Message) => void;
  verbose: (message: Message) => void;
  debug: (message: Message) => void;
  silly: (message: Message) => void;
}
