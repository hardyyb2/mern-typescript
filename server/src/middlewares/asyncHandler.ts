import { NextFunction, Request, Response } from "express";

type controllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const asyncHandler = (fn: controllerFunction) => (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
