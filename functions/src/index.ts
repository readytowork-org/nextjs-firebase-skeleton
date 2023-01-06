import { https } from "firebase-functions";
import next from "next";
import express from "express";
import cors from "cors";
import jobs from "./jobs";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use("/jobs", jobs);

const main = express();
main.use("/", app);
exports.api = https.onRequest(main);

console.log("env", process.env.NODE_ENV);
const nextServer = next({
  dev: false,
  conf: { distDir: ".next" },
});

const nextjsHandle = nextServer.getRequestHandler();

exports.api = https.onRequest(main);
exports.next = https.onRequest(async (req, res) => {
  return nextServer.prepare().then(() => nextjsHandle(req, res));
});
