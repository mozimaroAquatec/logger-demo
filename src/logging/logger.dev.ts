import { createLogger, transports, format } from "winston";
const { combine, timestamp, printf, colorize, errors, json, prettyPrint } =
  format;
import * as path from "path";

// Function to create a development logger
const createDevLogger = (serviceName: string) => {
  return createLogger({
    level: "debug",
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      json()
    ),
    transports: [
      new transports.Console({
        format: combine(
          prettyPrint() // Use prettyPrint only for console output
        ),
      }),
      new transports.File({
        filename: path.join(__dirname, `logs/dev/${serviceName}.log`),
      }),
    ],
    defaultMeta: {
      service: serviceName,
    },
  });
};

export default createDevLogger;
