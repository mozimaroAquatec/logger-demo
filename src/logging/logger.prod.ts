// logger-prod.ts
import { createLogger, transports, format } from "winston";
const { combine, timestamp, errors, prettyPrint, json } = format;
import * as path from "path";

// Function to create a production logger
const createProdLogger = (serviceName: string) => {
  return createLogger({
    level: "info",
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      prettyPrint(),
      json()
    ),
    transports: [
      new transports.File({
        filename: path.join(__dirname, `logs/prod/${serviceName}.log`),
      }),
    ],
    defaultMeta: {
      service: serviceName,
    },
  });
};

export default createProdLogger;
