// loggerMiddleware.ts
import { Request, Response } from "express";
import { pageNotFoundLogger } from "../logging";
import ErrorResponse from "../utils/error.handler";

export function logNotFound(req: Request, res: Response) {
  pageNotFoundLogger.info(`Page not found`, { url: req.path });
  res.status(404).json(new ErrorResponse(404, "page not found")); // Send 404 response
}
