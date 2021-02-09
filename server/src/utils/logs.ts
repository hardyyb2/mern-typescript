import chalk from "chalk";

type messageType = any;

const Log = (msg: messageType) => console.log(msg);
const successLog = (msg: messageType) => console.log(chalk.bgGreen.black(msg));
const warningLog = (msg: messageType) => console.log(chalk.yellow(msg));
const errorLog = (msg: messageType) => console.log(chalk.bgRed.white(msg));
const dbSuccessLog = (msg: messageType) =>
  console.log(chalk.black.bgWhite(msg));
const dbErrorLog = (msg: messageType) => console.log(chalk.red(msg));

const Logs = {
  Log,
  successLog,
  warningLog,
  errorLog,
  dbSuccessLog,
  dbErrorLog,
};

export default Logs;
