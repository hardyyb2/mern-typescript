import { connection, connect } from "mongoose";
import dotenv from "dotenv";

import { Logs } from "../utils/functions";

const { dbSuccessLog, dbErrorLog } = Logs;

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/test`;

connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).catch((error) => {
  dbErrorLog(`Error Occured in connecting MongoDB \n ${error}`);
});

connection.on("connected", () => {
  dbSuccessLog(`Mongoose connected to ${MONGODB_URI}`);
});
connection.on("error", (err: Error) => {
  dbErrorLog(`Mongoose connection error: ${err}`);
});
connection.on("disconnected", () => {
  dbErrorLog(`Mongoose disconnected`);
});
