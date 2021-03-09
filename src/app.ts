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
app.get("/badRequest", async (req, res) => {
    res.status(400);
    res.send({
        "message": "Unsuccessful: request bad"
    });
});
app.get("/notFound", async (req, res) => {
    res.status(404);
    res.send({
        "message": "Unsuccessful: not found"
    });
});
app.get("/forbidden", async (req, res) => {
    res.status(403);
    res.send({
        "message": "Unsuccessful: rejected"
    });
});
app.get("/teapot", async (req, res) => {
    res.status(418);
    res.send({
        "message": "Bold of you to assume I make coffee! I'm a teapot!"
    });
});
app.get("/noResponse", async (req, res) => {
    res.destroy(null);
});

export function stop() {
    server.close();
}

export default app;