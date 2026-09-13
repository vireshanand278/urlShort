import express from "express";

import { createShortUrl } from "../crontroller/shortUrl.controller.js";
const router =express.Router();

router.post("/",createShortUrl)

export default router;