import express from "express";
import { getHomepage } from "../controllers/blog.js";

const router = express.Router();

router.route("/").get(getHomepage);

export default router;
