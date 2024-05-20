import mongoose, { ConnectOptions } from "mongoose";
import ErrorResponse from "../utils/error.handler";
import "./env.config";
import { dbLogger } from "../logging";
mongoose.set("strictQuery", true);
const mongo_uri: string =
  "mongodb+srv://yassinebazouz:AVBAa3lj6ximvone@mymqttcluster.cd7r5wc.mongodb.net/save_energies_demo?retryWrites=true&w=majority&appName=MyMqttCluster";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    dbLogger.info("data base connected successfully");
  } catch (error) {
    dbLogger.error(
      "mongoose connect error",
      new ErrorResponse(500, `${error}`)
    );
    throw new ErrorResponse(500, `mongoose connect error is : ${error}`);
  }
};

export default connectDB;
