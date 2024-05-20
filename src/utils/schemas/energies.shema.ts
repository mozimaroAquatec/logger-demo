import Joi from "joi";
/**
 * @desc Validates whether the input year is a number or a string.
 * @param year - The year to validate.
 * @returns {Joi.ValidationResult} - The validation result.
 */
/*======= yearSchema ========*/
export const yearSchema = (year: string | number): Joi.ValidationResult => {
  const schema = Joi.object({
    year: Joi.required(),
  });
  return schema.validate(year);
};
/*=======// yearSchema //========*/
/*======= DateAndTimeSchema ========*/
export const DateAndTimeSchema = (obj: { date: string; time: string }) => {
  const schema = Joi.object({
    date: Joi.string().required(),
    time: Joi.string().required(),
  });
  return schema.validate(obj);
};
/*=======// DateAndTimeSchema //========*/
/*======= DateAndTimeSchema ========*/
export const updateEnergieSchema = (obj: { message: string }) => {
  const schema = Joi.object({
    message: Joi.string().required(),
  });
  return schema.validate(obj);
};
/*=======// DateAndTimeSchema //========*/

/*======= DateAndTimeSchema ========*/
export const EnergiesByYearAndMonthSchema = (obj: {
  year: string | number;
  month: string | number;
}) => {
  const schema = Joi.object({
    year: Joi.required(),
    month: Joi.required(),
  });
  return schema.validate(obj);
};
/*=======// DateAndTimeSchema //========*/
/*======= EnergiesByDateSchema ========*/
export const EnergiesByDateSchema = (date:string) => {
  const schema = Joi.object({
    date: Joi.string().required(),
  
  });
  return schema.validate(date);
};
/*=======// EnergiesByDateSchema //========*/