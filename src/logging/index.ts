// index.ts
import createDevLogger from "./logger.dev";
import createProdLogger from "./logger.prod";
const logger =
  process.env.NODE_ENV === "production" ? createProdLogger : createDevLogger;

export const userslogger = logger("users");
export const dbLogger = logger("DB");
export const serverLogger = logger("server");
export const pageNotFound = logger("pageNotFound");

export default logger;
