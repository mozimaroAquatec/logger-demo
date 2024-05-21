"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// logger-prod.ts
const winston_1 = require("winston");
const { combine, timestamp, errors, prettyPrint, json, metadata } = winston_1.format;
const path = __importStar(require("path"));
const { MongoDB, } = require("winston-mongodb");
// MongoDB connection URI
const mongoUri = process.env.MONGO_URI;
// Function to create a production logger
const createProdLogger = (serviceName) => {
    return (0, winston_1.createLogger)({
        level: "info",
        format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), prettyPrint(), json()),
        transports: [
            new winston_1.transports.File({
                filename: path.join(__dirname, `logs/prod/${serviceName}.log`),
            }),
            new MongoDB({
                level: "info",
                db: process.env.MONGO_URI, // Use the MongoDB URI directly
                options: { useUnifiedTopology: true },
                collection: serviceName,
                format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), prettyPrint(), json(), metadata()),
            }),
        ],
        defaultMeta: {
            service: serviceName,
        },
    });
};
exports.default = createProdLogger;
//# sourceMappingURL=logger.prod.js.map