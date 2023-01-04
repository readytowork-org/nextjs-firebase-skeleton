import * as express from "express";
import * as admin from "firebase-admin";
const db = admin.firestore();

const router = express.Router();

router.get('/',  async (req:express.Request,res:express.Response) => {
    try {
    const jobs = await db.collection('Jobs').get();
    res.status(200).json(jobs)
    } catch (error) {
        res.sendStatus(400)
    }
});

export default router;
