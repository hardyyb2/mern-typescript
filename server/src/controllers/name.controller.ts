import { asyncHandler } from "../middlewares";
import { ErrorResponse, send } from "../common";
import { Messages } from "../utils/constants";
import { NameModel } from "../models";

const {
  PROVIDE_NAME,
  NOT_FOUND,
  PROVIDE_AGE,
  CREATED,
  UPDATED,
  DELETED,
} = Messages;

const getName = asyncHandler(async (req, res, next) => {
  const { name } = req.params;

  if (!name) {
    return next(new ErrorResponse(PROVIDE_NAME, 400));
  }

  const foundName = await NameModel.findOne({ name });

  if (!foundName) {
    return next(new ErrorResponse(NOT_FOUND, 404));
  }

  return send(res, 200, foundName);
});

const postName = asyncHandler(async (req, res, next) => {
  const { name, age } = req.body;

  if (!name) {
    return next(new ErrorResponse(PROVIDE_NAME, 400));
  } else if (!age) {
    return next(new ErrorResponse(PROVIDE_AGE, 400));
  }

  const newName = new NameModel({ name, age });
  await newName.save();

  return send(res, 201, CREATED);
});

const updateName = asyncHandler(async (req, res, next) => {
  const { name: oldName } = req.params;
  const { name: newName, age } = req.body;

  if (!oldName || !newName) {
    return next(new ErrorResponse(PROVIDE_NAME, 400));
  }

  const updatedObj = { name: newName, ...(age && { age }) };

  const updatedName = await NameModel.findOneAndUpdate(
    { name: oldName },
    updatedObj,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedName) {
    return next(new ErrorResponse(NOT_FOUND, 404));
  }

  return send(res, 201, UPDATED);
});

const deleteName = asyncHandler(async (req, res, next) => {
  const { name } = req.params;

  if (!name) {
    return next(new ErrorResponse(PROVIDE_NAME, 400));
  }

  const deletedName = await NameModel.findOneAndDelete({ name });

  if (!deletedName) {
    return next(new ErrorResponse(NOT_FOUND, 404));
  }

  return send(res, 200, DELETED);
});

const controllers = {
  getName,
  postName,
  deleteName,
  updateName,
};

export default controllers;
