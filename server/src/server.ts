import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import { NameRoute } from "./routes";
import { errorHandler } from "./middlewares";
import { Logs } from "./utils";
import "./services/db.service";

dotenv.config();
const { errorLog, successLog } = Logs;
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(
  morgan("dev", {
    skip: function (_, res) {
      return res.statusCode < 400;
    },
  })
);

const API_ROUTE = process.env.API_ROUTE || `/api/v1.1`;

app.use(`${API_ROUTE}/name`, NameRoute);

app.use((err: any, req: Request, res: Response, next: NextFunction) =>
  errorHandler(err, res)
);

const server = app
  .listen(PORT, () => {
    successLog(`Listening to port ${PORT} in mode ${process.env.NODE_ENV}`);
  })
  .on("error", (err: Error) => {
    return errorLog(`Failed to start Server : ${err}`);
  });

process.on("unhandledRejection", (err: Error, _) => {
  errorLog(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
