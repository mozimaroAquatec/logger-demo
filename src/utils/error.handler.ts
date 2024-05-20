class ErrorResponse extends Error {
  constructor(public status: number, public message: string) {
    super(message); // Call the parent class's constructor
  }
}

export default ErrorResponse;
