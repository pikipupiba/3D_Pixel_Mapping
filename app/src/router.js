import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
    //res.sendFile(path.join(__dirname, '/view/index.html'));
    res.send("FUCK YEA");
});

import map_leds from "./controllers/map_leds.js";

router.post("/map_leds", map_leds);

import upload from "./controllers/upload.js";

router.post("/upload", upload);


export { router as default };