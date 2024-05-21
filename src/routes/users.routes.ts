import express, { Router } from "express";
import {
  createUser,
  deleteUsers,
  getUsers,
  thorwUserError,
} from "../controllers/users.controllers";
import { validateObjectId } from "../middlewares/validate.object.id";
// Initialize a new router instance
const usersRoutes: Router = express.Router();

// Route for subscribing to MQTT messages using GET method

usersRoutes.post("/", createUser);
usersRoutes.get("/", getUsers);
usersRoutes.get("/error", thorwUserError);

usersRoutes.delete("/", deleteUsers);

// Export the router instance
export default usersRoutes;
