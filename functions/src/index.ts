import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import next from "next";

if (process.env.NODE_ENV === "test") {
  const serviceAccount = require("../serviceAccountKey.json");
  admin.initializeApp({
    projectId: "readytoworkjapan",
    credential: admin.credential.cert(serviceAccount)
  })
} else {
  admin.initializeApp();
}

const express = require('express');
const cors = require('cors');
import jobs from "./jobs";
const app = express()

app.use(express.json());
app.use(cors({ origin: true }));
app.use('/jobs', jobs )
const main = express();
main.use("/api", app);

exports.api = functions.https.onRequest(main);

const isDev = process.env.NODE_ENV !== "production";
const nextServer = next({
  dev: isDev,
  conf: { distDir: ".next" },
});

const nextjsHandle = nextServer.getRequestHandler();
exports.nextServer = functions.https.onRequest(async (req, res) => {
  return nextServer.prepare().then(() => nextjsHandle(req, res));
});
