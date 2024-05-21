"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thorwUserError = exports.deleteUsers = exports.getUsers = exports.createUser = void 0;
// Importing necessary modules
const error_handler_1 = __importDefault(require("../utils/error.handler")); // Importing custom error handler
const users_model_1 = __importDefault(require("../models/users.model")); // Importing Helioss model
const success_response_1 = require("../utils/success.response");
const users_shema_1 = require("../utils/schemas/users.shema");
const logging_1 = require("../logging");
/**
 * @desc create new user
 * @param POST
 * @access PUBLIC
 */
const createUser = async function (req, res) {
    try {
        let { username } = req.body;
        // Validating input data from client
        const { error } = (0, users_shema_1.createUserSchema)(req.body);
        if (error)
            return res
                .status(400)
                .json(new error_handler_1.default(400, `${error.details[0].message}`));
        logging_1.userslogger.info("user created successfully", {
            method: "POST",
            status: 201,
        });
        await users_model_1.default.create({ username });
        return res
            .status(201)
            .json(new success_response_1.SuccessResponse(201, "user created successfully"));
    }
    catch (error) {
        // Handle errors
        res.status(500).json(new error_handler_1.default(500, "Internal server error"));
        logging_1.userslogger.error("createUser", new error_handler_1.default(500, `${error}`));
        throw new error_handler_1.default(500, `create user error: ${error}`);
    }
};
exports.createUser = createUser;
/**
 * @desc  Controller function to handle getting all energies
 * @param GET /
 * @param PUBLIC
 **/
const getUsers = async function (req, res) {
    try {
        // Query the database for all Energies records
        const users = await users_model_1.default.find();
        // Return success response with Energies data
        logging_1.userslogger.info("get users success", {
            method: "GET",
            status: 200,
        });
        return res
            .status(200)
            .json(new success_response_1.SuccessResponse(200, "get users success", { users }));
    }
    catch (error) {
        // Handle errors
        res.status(500).json(new error_handler_1.default(500, "Internal server error"));
        logging_1.userslogger.error("getUsers", new error_handler_1.default(500, `${error}`));
        throw new error_handler_1.default(500, `getUsers : ${error}`);
    }
};
exports.getUsers = getUsers;
/**
 * @desc  Controller function to handle getting all energies
 * @param DELETE /
 * @param PUBLIC
 **/
const deleteUsers = async function (req, res) {
    try {
        // Query the database for all Energies records
        await users_model_1.default.deleteMany();
        // Return success response with Energies data
        logging_1.userslogger.info("users deleted successfully", {
            method: "GET",
            status: 200,
        });
        return res
            .status(200)
            .json(new success_response_1.SuccessResponse(200, "users deleted successfully"));
    }
    catch (error) {
        // Handle errors
        res.status(500).json(new error_handler_1.default(500, "Internal server error"));
        logging_1.userslogger.error("deleteUsers", new error_handler_1.default(500, `${error}`));
        throw new error_handler_1.default(500, `deleteUsers : ${error}`);
    }
};
exports.deleteUsers = deleteUsers;
/**
 * @desc  Controller function to handle getting all energies
 * @param DELETE /
 * @param PUBLIC
 **/
const thorwUserError = async function (req, res) {
    try {
        // Query the database for all Energies records
        logging_1.userslogger.error("user error example", new error_handler_1.default(400, "user error example"));
        return res.status(200).json(new success_response_1.SuccessResponse(200, "user error example"));
    }
    catch (error) {
        // Handle errors
        res.status(500).json(new error_handler_1.default(500, "Internal server error"));
        logging_1.userslogger.error("deleteUsers", new error_handler_1.default(500, `${error}`));
        throw new error_handler_1.default(500, `thorwUserError : ${error}`);
    }
};
exports.thorwUserError = thorwUserError;
//# sourceMappingURL=users.controllers.js.map