import express from "express";
import { nanoid } from "nanoid";
import schema from "../models/shortUrl.model.js";
import { createShortUrl } from "../crontroller/shortUrl.controller.js";
const router =express.Router();

router.post("/",createShortUrl)

export default router;