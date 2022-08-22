import express from "express";
import { connectToDatabase, disconnectFromDatabase } from "./utils/database";
import logger from "./utils/logger";

const PORT = process.env.PORT || 4000;

const app = express();

const server = app.listen(PORT, async () => {
  await connectToDatabase();
  logger.info(`Server listenint at http://localhost: ${PORT}`);
});

const signals = ["SIGTERM", "SIGINT"];

const gracefulShutdown = (signal: string) => {
  process.on(signal, async () => {
    logger.info("Goodbye, got signal", signal);

    server.close();

    await disconnectFromDatabase();

    //disconnect from db

    logger.info("My work here is done");

    process.exit(0);
  });
};

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
