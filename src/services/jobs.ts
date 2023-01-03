import { collection, getDocs, getDoc, doc } from "firebase/firestore";

import { db } from "../firebase";

export interface JobsProps {
  id: string;
  title: string;
  description: string;
  category: string;
}

export const getJobsList = async (): Promise<JobsProps[]> => {
  const querySnapshot = await getDocs(collection(db, "Jobs"));
  const jobList = [];
  querySnapshot.docs.forEach((doc) => {
    jobList.push({ ...doc.data(), id: doc.id });
  }) as any;
  return jobList;
};

export const getJobsDetail = async (id: string): Promise<JobsProps> => {
  const snap = await getDoc(doc(db, "Jobs", id));
  return snap.data() as any;
};
