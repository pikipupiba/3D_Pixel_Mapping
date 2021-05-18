import express from "express"

const app = express();

import router from "./router.js";

app.use("/", router);