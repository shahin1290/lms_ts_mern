import { CORS_ORIGIN } from "./constants";
import express from "express";
import cookieParser from "cookie-parser";
import { connectToDatabase, disconnectFromDatabase } from "./utils/database";
import logger from "./utils/logger";
import cors from "cors";
import helmet from "helmet";
import userRoute from "./modules/user/user.route";
import authRoute from "./modules/auth/auth.route";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(helmet());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

const server = app.listen(PORT, async () => {
  await connectToDatabase();
  logger.info(`Server listenint at http://localhost:${PORT}`);
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
