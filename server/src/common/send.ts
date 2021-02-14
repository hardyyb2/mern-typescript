import { Response } from "express";

const send = (res: Response, status: number, data: any) => {
  const statusInitial = status.toString().charAt(0);
  const errorStatusInitials = ["4", "5"];

  let success = errorStatusInitials.includes(statusInitial) ? false : true;

  let resObj = success ? { success, data } : { success, error: data };
  return res.status(status).send(resObj);
};

export default send;
