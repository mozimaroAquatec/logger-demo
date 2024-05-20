// Define a custom validation function for a valid year
export const isValidYear = (year: number) => {
  // Check if the value is a valid number and within a reasonable range
  if (typeof year !== "number" || year >= new Date().getFullYear()) {
    return true;
  } else return false;
};
