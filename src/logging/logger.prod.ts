// logger-prod.ts
import { createLogger, transports, format } from "winston";
const { combine, timestamp, errors, prettyPrint, json, metadata } = format;
import * as path from "path";

import mongoose, { ConnectOptions } from "mongoose";
import { MongoDB, MongoDBConnectionOptions } from "winston-mongodb";

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
      new MongoDB({
        level: "info",
        db: process.env.MONGO_URI, // Use the MongoDB URI directly
        options: { useUnifiedTopology: true },
        collection: serviceName,
        format: combine(
          timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
          errors({ stack: true }),
          prettyPrint(),
          json(),
          metadata()
        ),
      } as MongoDBConnectionOptions),
    ],
    defaultMeta: {
      service: serviceName,
    },
  });
};

export default createProdLogger;
