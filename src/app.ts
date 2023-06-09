import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import routes from "./routes";

const app: Application = express();
app.use(express.json());

app.use("/users", routes.user);
app.use("/session", routes.session);
app.use("/talks", routes.talk);
app.use("/messages", routes.message);

app.use(handleErrors);

export default app;