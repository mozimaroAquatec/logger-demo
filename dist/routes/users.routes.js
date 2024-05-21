"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("../controllers/users.controllers");
// Initialize a new router instance
const usersRoutes = express_1.default.Router();
// Route for subscribing to MQTT messages using GET method
usersRoutes.post("/", users_controllers_1.createUser);
usersRoutes.get("/", users_controllers_1.getUsers);
usersRoutes.get("/error", users_controllers_1.thorwUserError);
usersRoutes.delete("/", users_controllers_1.deleteUsers);
// Export the router instance
exports.default = usersRoutes;
//# sourceMappingURL=users.routes.js.map