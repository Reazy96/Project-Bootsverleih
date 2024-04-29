import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDb } from "./models/indexConnect.js";
import { Boote } from "./models/boote.js";

// * Middlewares
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server running");
});

// * Boote Routes

app.get("/api/v1/boote", (req, res) => {
  Boote.find({})
    .then((boote) => res.json(boote))
    .catch((err) => {
      res.status(500).json({ err, message: "Could not GET all Boote" });
    });
});

// * Server Listener
connectToDb()
  .then(() => {
    const PORT = 3010;
    app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
