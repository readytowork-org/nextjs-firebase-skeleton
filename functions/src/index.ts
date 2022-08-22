import * as functions from "firebase-functions";
import next from "next";
const isDev = process.env.NODE_ENV !== "production";

const nextServer = next({
  dev: isDev,
  conf: {distDir: ".next"},
});

const nextjsHandle = nextServer.getRequestHandler();
exports.nextServer = functions.https.onRequest(async (req, res) => {
  return nextServer.prepare().then(() => nextjsHandle(req, res));
});

