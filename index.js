import express from "express";
import "dotenv/config";
import dbConnection from "./config/db.js";

const app = express();

app.use(express.json());

dbConnection();

app.get("/", (req, res) => {
  res.status(200).send({ success: true });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
