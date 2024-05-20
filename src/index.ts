// Importing required modules
import express, { Response, Request } from "express";
import ErrorResponse from "./utils/error.handler"; // Importing custom error handler
import connectDB from "./config/connect.db"; // Importing MongoDB connection function
import usersRoutes from "./routes/users.routes"; // Importing energy routes
import cors from "cors";

import "./config/env.config";
import logger, { pageNotFound, serverLogger } from "./logging";
import { logNotFound } from "./middlewares/page.not.found";
// Creating an Express app
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Connecting to MongoDB
connectDB();

// Using the energy routes
app.use("/", usersRoutes);

app.use(logNotFound);

// Starting the server and listening on the specified port
app.listen(process.env.PORT || 5000, async function () {
  try {
    serverLogger.info(`Server is running on port ${process.env.PORT}`, {
      PORT: process.env.PORT,
    });
  } catch (error) {
    serverLogger.error("server error", new ErrorResponse(500, `${error}`));
  }
});
