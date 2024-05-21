"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const usersSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
}, { timestamps: true });
const Users = mongoose_1.default.model("user", usersSchema);
exports.default = Users;
//# sourceMappingURL=users.model.js.map