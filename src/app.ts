import { environment } from './controller';
import express from 'express';
import { Server } from 'node:http';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = app.listen(environment.port, () => {
    console.log(`Listening on port `, environment.port);
});


app.get("/crash", async (req, res) => {
   res.status(500);
   res.send({
       "message": "Expected error occured: endpoint is /crash"
   });
});
app.get("/complete", async (req, res) => {
    res.status(200);
    res.send({
        "message": "Successful get"
    });
});

export function stop() {
    server.close();
}

export default app;