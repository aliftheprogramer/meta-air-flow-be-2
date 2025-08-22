import express, { Express, Request, Response } from "express";
import router from "./routes/route";

const app: Express = express();

app.use(express.json());
app.use("/api", router);

export default app;
