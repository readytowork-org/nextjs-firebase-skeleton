import * as functions from "firebase-functions"
import * as express from "express";
import * as cors from "cors";
import jobs from './jobs';

import next from "next";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use("/jobs",jobs)

const main = express();
main.use("/api", app);
exports.api = functions.https.onRequest(main);

const isDev = process.env.NODE_ENV !== "production";
const nextServer = next({
  dev: isDev,
  conf: { distDir: ".next" },
});

const nextjsHandle = nextServer.getRequestHandler();
exports.next = functions.https.onRequest(async (req:express.Request,res:express.Response) => {
  return nextServer.prepare().then(() => nextjsHandle(req, res));
});
