"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotFound = exports.serverLogger = exports.dbLogger = exports.userslogger = void 0;
// index.ts
const logger_dev_1 = __importDefault(require("./logger.dev"));
const logger_prod_1 = __importDefault(require("./logger.prod"));
const logger = process.env.NODE_ENV === "production" ? logger_prod_1.default : logger_dev_1.default;
exports.userslogger = logger("users-logger");
exports.dbLogger = logger("DB");
exports.serverLogger = logger("server");
exports.pageNotFound = logger("pageNotFound");
exports.default = logger;
//# sourceMappingURL=index.js.map