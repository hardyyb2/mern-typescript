import { Response } from "express";

import { ErrorResponse } from "../common";
import { Messages, getDuplicate } from "../utils";

const { SERVER_ERROR } = Messages;

interface ErrorProps extends ErrorResponse {
  errors?: any;
  code?: number;
  value?: string | number;
}

const errorHandler = (err: ErrorProps, res: Response) => {
  let error = { ...err };
  error.message = err.message;

  console.log(error);

  //bad object id
  if (err.name === "CastError") {
    const message = `Resources not found for ${error.value}`;
    error = new ErrorResponse(message, 404);
  }

  //duplicate key
  if (error.hasOwnProperty("code") && error.code === 11000) {
    const errMsg = getDuplicate(err);
    const message = `Duplicate field value entered. ${errMsg} `;
    error = new ErrorResponse(message, 400);
  }

  //validation error
  if (error.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val: any) => val.message)
      .join(", ");
    error = new ErrorResponse(message, 400);
  }

  res
    .status(
      typeof error.statusCode === "number"
        ? error.statusCode
        : parseInt(error.statusCode) || 500
    )
    .json({
      success: false,
      error: error.message || SERVER_ERROR,
    });
};

export default errorHandler;
