import Joi from "joi";
/**
 * @desc Validates whether the input year is a number or a string.
 * @param year - The year to validate.
 * @returns {Joi.ValidationResult} - The validation result.
 */
/*======= yearSchema ========*/
export const createUserSchema = (username: string): Joi.ValidationResult => {
  const schema = Joi.object({
    username: Joi.required(),
  });
  return schema.validate(username);
};
/*=======// yearSchema //========*/
