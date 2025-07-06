import express from 'express';
import { prismaClient } from "./db";

export const app = express();

app.use(express.json());

app.post("/sum",async  (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    await prismaClient.sum.create({
        data: {
            a,
            b,
            result: answer
        }
    })
    res.json({
        answer
    })
});

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });