import mongoose from "mongoose";

const booteSchema = new mongoose.Schema(
  {
    Boot: { type: String, required: true },
    Baujahr: { type: Number, required: true },
    Seriennummer: { type: String, required: true },
    Material: { type: String, required: true },
    Bootsart: { type: String, required: true },
  },
  { collection: "boote" }
);

export const Boote = mongoose.model("Boote", booteSchema);
