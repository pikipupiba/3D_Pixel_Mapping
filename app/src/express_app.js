import express from "express"
import http from "http";

const HTTP_PORT = 20666;

const app = express();

import router from "./router.js";

app.use("/", router);

http.createServer(app).listen(HTTP_PORT);

