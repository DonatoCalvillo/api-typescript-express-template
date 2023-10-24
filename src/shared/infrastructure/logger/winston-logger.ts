import { Logger as WinstonLoggerType } from "winston";

import devConfig from "./log-config-dev";

import { Logger, Message } from "../../domain/logger";

export class WinstonLogger implements Logger {
  private readonly logger: WinstonLoggerType;

  constructor() {
    this.logger = devConfig();
  }

  child(bindings: Record<string, unknown>): Logger {
    return this.logger.child(bindings);
  }

  error(message: Message): void {
    this.logger.error(message);
  }

  warn(message: Message): void {
    this.logger.warn(message);
  }

  info(message: Message): void {
    this.logger.info(message);
  }

  http(message: Message): void {
    this.logger.http(message);
  }

  verbose(message: Message): void {
    this.logger.verbose(message);
  }

  debug(message: Message): void {
    this.logger.debug(message);
  }

  silly(message: Message): void {
    this.logger.silly(message);
  }
}
