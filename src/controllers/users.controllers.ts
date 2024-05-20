// Importing necessary modules
import ErrorResponse from "../utils/error.handler"; // Importing custom error handler
import { Request, Response } from "express"; // Importing types for Express request and response
import Users from "../models/users.model"; // Importing Helioss model
import {} from "../utils/schemas/energies.shema";
import { SuccessResponse } from "../utils/success.response";
import { createUserSchema } from "../utils/schemas/users.shema";
import { userslogger } from "../logging";

/**
 * @desc create new user
 * @param POST
 * @access PUBLIC
 */
export const createUser = async function (req: Request, res: Response) {
  try {
    let { username } = req.body as { username: string };
    // Validating input data from client
    const { error } = createUserSchema(req.body);
    if (error)
      return res
        .status(400)
        .json(new ErrorResponse(400, `${error.details[0].message}`));

    userslogger.info("user created successfully", {
      method: "POST",
      status: 201,
    });
    await Users.create({ username });

    return res
      .status(201)
      .json(new SuccessResponse(201, "user created successfully"));
  } catch (error) {
    // Handle errors
    res.status(500).json(new ErrorResponse(500, "Internal server error"));
    userslogger.error("createUser", new ErrorResponse(500, `${error}`));
    throw new ErrorResponse(500, `create user error: ${error}`);
  }
};

/**
 * @desc  Controller function to handle getting all energies
 * @param GET /
 * @param PUBLIC
 **/
export const getUsers = async function (req: Request, res: Response) {
  try {
    // Query the database for all Energies records
    const users = await Users.find();
    // Return success response with Energies data
    userslogger.info("get users success", {
      method: "GET",
      status: 200,
    });
    return res
      .status(200)
      .json(new SuccessResponse(200, "get users success", { users }));
  } catch (error) {
    // Handle errors
    res.status(500).json(new ErrorResponse(500, "Internal server error"));
    userslogger.error("getUsers", new ErrorResponse(500, `${error}`));
    throw new ErrorResponse(500, `getUsers : ${error}`);
  }
};
/**
 * @desc  Controller function to handle getting all energies
 * @param DELETE /
 * @param PUBLIC
 **/
export const deleteUsers = async function (req: Request, res: Response) {
  try {
    // Query the database for all Energies records
    await Users.deleteMany();
    // Return success response with Energies data
    userslogger.info("users deleted successfully", {
      method: "GET",
      status: 200,
    });
    return res
      .status(200)
      .json(new SuccessResponse(200, "users deleted successfully"));
  } catch (error) {
    // Handle errors
    res.status(500).json(new ErrorResponse(500, "Internal server error"));
    userslogger.error("deleteUsers", new ErrorResponse(500, `${error}`));
    throw new ErrorResponse(500, `deleteUsers : ${error}`);
  }
};
