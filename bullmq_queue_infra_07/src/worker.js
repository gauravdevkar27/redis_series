import { Job, Worker } from "bullmq";
import { Connection} from './queue.js';
                                            //consumer
const worker = new Worker(
    "emails",
    async (job) => {
        console.log("Processing email job ...", Job.id, Job.name, Job.data);
        (await new Promise((resolve) => setTimeout(resolve, 1500)),
    console.log("Email job completed!", Job.id, Job.name, Job.data))
    },
    {connection}
);

worker.on("completed", (job)=> {
    console.log("job completed!", Job.id, Job.name, Job.data);
})

worker.on("failed", (job, err)=> {
    console.log("job failed!", Job.id, Job.name, Job.data);
})