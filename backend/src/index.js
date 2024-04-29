import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDb } from "./models/indexConnect.js";
import { Boote } from "./models/boote.js";
import { Reservierung } from "./models/reservierung.js";

// * Middlewares
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server running");
});

// ** Boote Routes

//*!get all boote
app.get("/api/v1/boote", (req, res) => {
  Boote.find({})
    .then((boote) => res.json(boote))
    .catch((err) => {
      res.status(500).json({ err, message: "Could not GET all Boote" });
    });
});
//*!get one boot by ID
app.get("/api/v1/boote/:bootId", (req, res) => {
  const bootId = req.params.bootId;
  Boote.findById(bootId)
    .then((foundBoot) => res.json(foundBoot || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not find boot" + bootId });
    });
});

//*! post new boot
app.post("/api/v1/boote", (req, res) => {
  const newBoot = req.body;
  Boote.create(newBoot)
    .then((addedBoot) => res.json(addedBoot || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not add a new boot" });
    });
});

//*! update boot by Id
app.patch("/api/v1/boote/:bootId", (req, res) => {
  const bootId = req.params.bootId;
  const updateInfo = req.body;

  Boote.findByIdAndUpdate(bootId, updateInfo, { new: true })
    .then((updatedBoot) => res.json(updatedBoot || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not update the boot" });
    });
});
//*! delete boot by Id
app.delete("/api/v1/boote/:bootId", (req, res) => {
  const bootId = req.params.bootId;
  Boote.findByIdAndDelete(bootId)
    .then((deletedBoot) => res.json(deletedBoot || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not delete the boot" });
    });
});

// ** Reservierung Routes

//*! get alle Resrvierungen
app.get("/api/v1/reservierung", (req, res) => {
  Reservierung.find({})
    .then((reservierung) => res.json(reservierung))
    .catch((err) => {
      res.status(500).json({ err, message: "Could not GET all reservations" });
    });
});

//*!get one reservation by ID
app.get("/api/v1/reservierung/:reservierungsId", (req, res) => {
  const reservierungsId = req.params.reservierungsId;
  Reservierung.findById(reservierungsId)
    .then((foundreservation) => res.json(foundreservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "could not find reservation" + reservierungsId });
    });
});

//*! post a new  Reservation
app.post("/api/v1/reservierung", (req, res) => {
  const newReservation = req.body;
  Reservierung.create(newReservation)
    .then((addedReserv) => res.json(addedReserv || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not add a new reservation" });
    });
});

//*! update reservation by Id
app.patch("/api/v1/reservierung/:reservierungsId", (req, res) => {
  const reservierungId = req.params.reservierungsId;
  const updateInfo = req.body;

  Reservierung.findByIdAndUpdate(reservierungId, updateInfo, { new: true })
    .then((updatedReservation) => res.json(updatedReservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "could not update the reservation" });
    });
});

//*! delete reservation by Id
app.delete("/api/v1/reservierung/:reservierungsId", (req, res) => {
  const reservierungId = req.params.reservierungsId;
  Reservierung.findByIdAndDelete(reservierungId)
    .then((deletedreservation) => res.json(deletedreservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "could not delete the reservation" });
    });
});

// * Server Listener
connectToDb()
  .then(() => {
    const PORT = 3010;
    app.listen(PORT, () =>
      console.log(`Server ready at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
