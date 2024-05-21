import createDevLogger from "./logger.dev";
import createProdLogger from "./logger.prod";

// Determine the environment and create the appropriate logger factory
const logger =
  process.env.NODE_ENV === "production" ? createProdLogger : createDevLogger;

// Create specific loggers for different services
export const usersLogger = logger("users-logger");
export const dbLogger = logger("DB");
export const serverLogger = logger("server");
export const pageNotFoundLogger = logger("pageNotFound");

export default logger;
