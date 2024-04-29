import mongoose from "mongoose";

const ReservierungsSchema = new mongoose.Schema(
  {
    Startdatum: { type: String, required: true },
    Enddatum: { type: String, required: true },
    Boot: { type: String, required: true },
  },
  { collection: "reservierung" }
);

export const Reservierung = mongoose.model("Reservierung", ReservierungsSchema);
