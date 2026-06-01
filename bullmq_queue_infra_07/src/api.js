//producer 
import express from 'express';
import { emailQueue } from './queue.js';
import { Backoffs } from 'bullmq';

const app = express();
app.use(express.json());


app.post("/welcome-email", async (req, res) => {
    const job = emailQueue.add(
        {
            to: req.body.to,
            name: req.body.name || "Leaner",
        }, {
        attempts: 3,
        backoff: {
            type: "exponential",
            delay: 1000
        }
    }
    )
    res.json({ message: "welcome email job added to the queue!", jobId: job.id })
})

app.listen(3000, () => {
    console.log("Server is runnig on port 3000");
})