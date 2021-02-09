class ErrorResponse extends Error {
  constructor(public message: string, public statusCode: number | string) {
    super(message);
    this.statusCode = statusCode;
  }
}
export default ErrorResponse;
