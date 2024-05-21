import { createLogger, transports, format, Logger } from "winston";
const { combine, timestamp, printf, colorize, errors, align } = format;
import * as path from "path";
import morgan, { StreamOptions } from "morgan";
const createDevLogger = (serviceName: string): Logger => {
  return createLogger({
    level: "info",
    transports: [
      new transports.Console(),
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
