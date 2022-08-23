import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { getJobsDetail, JobsProps } from "../../services/jobs";

interface IJobProps {
    job: JobsProps;
}

const Job: React.FC<IJobProps> = ({ job }) => {
    return (
        <div className={styles.container}>
            <main >
                <h1 className={styles.title}>{"Job Detail"}</h1>
                <div>
                    <h2>{job.title}</h2>
                    <p>{job.category}</p>
                    <p>{job.description}</p>
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const id = params.id;
    const jobDetail = await getJobsDetail(id);
    return {
        props: { job: jobDetail }
    };
}


export default Job;