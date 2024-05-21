import mongoose, { ConnectOptions } from "mongoose";
import ErrorResponse from "../utils/error.handler";
import "./env.config";
import { dbLogger } from "../logging";
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const DB = dbLogger.startTimer();
    await mongoose.connect(process.env.MONGO_URI as string);
    DB.done({ message: "data base connected successfully" });

    // dbLogger.done("data base connected successfully");
  } catch (error) {
    dbLogger.error(
      "mongoose connect error",
      new ErrorResponse(500, `${error}`)
    );
    throw new ErrorResponse(500, `mongoose connect error is : ${error}`);
  }
};

export default connectDB;
