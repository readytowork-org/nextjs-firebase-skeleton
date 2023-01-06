import * as express from "express";
import * as admin from "firebase-admin";
import { buildResultsDocs } from "./utils";

const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
projectId: "readytoworkjapan",
credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

const router = express.Router();

router.get('/',  async (req:express.Request,res:express.Response) => {
    console.log("DKD")
    try {
    const jobs = await db.collection('jobs').get();
    res.status(200).json(buildResultsDocs(jobs))
    } catch (error) {
        res.sendStatus(400)
    }
});

export default router;
