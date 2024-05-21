"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @desc Validates whether the input year is a number or a string.
 * @param year - The year to validate.
 * @returns {Joi.ValidationResult} - The validation result.
 */
/*======= yearSchema ========*/
const createUserSchema = (username) => {
    const schema = joi_1.default.object({
        username: joi_1.default.required(),
    });
    return schema.validate(username);
};
exports.createUserSchema = createUserSchema;
/*=======// yearSchema //========*/
//# sourceMappingURL=users.shema.js.map