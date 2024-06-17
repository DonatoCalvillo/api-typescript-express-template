import express, { type Application } from "express";
import cors from "cors";

import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import { swaggerConfiguration } from "./config/swagger";
import { variables } from "./config/variables";

import { type Logger } from "./modules/shared/domain/logger";
import { container } from "./modules/shared/infrastructure/container";

import { healthRouter } from "./modules/health/infrastructure/api/routes/health-router";

export class App {
  public app: Application;
  private readonly port: number;
  private readonly logger: Logger;

  constructor() {
    this.app = express();

    this.port = variables.get("server.port");

    this.logger = container.resolve<Logger>("logger");

    this.middlewares();

    this.router();
  }

  middlewares(): void {
    // CORS
    this.app.use(cors());

    // Accept JSON
    this.app.use(express.json({ limit: "500kb" }));
  }

  router(): void {
    this.app.use("/api/health", healthRouter);

    const specs = swaggerJsDoc(swaggerConfiguration);
    this.app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs));
  }

  listen(): void {
    this.app.listen(this.port, () => {
      this.logger.info(`[APP] - Started application on port ${this.port}`);
      this.logger.info(`[APP] - Environment: ${variables.get("env")}`);
    });
  }
}
