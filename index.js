import express from "express";
import "dotenv/config";
import dbConnection from "./config/db.js";
import router from "./router/routes.js";

const app = express();

app.use(express.json());

dbConnection();

app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
