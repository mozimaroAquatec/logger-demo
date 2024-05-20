import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import ErrorResponse from "../utils/error.handler";

export const validateObjectId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).json(new ErrorResponse(400, "invalid id"));

  next();
};
