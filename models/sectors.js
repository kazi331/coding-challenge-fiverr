import mongoose from "mongoose";
/*
const items = mongoose.Schema({
  value: String,
  label: String
}) */

const sectorSchema = new mongoose.Schema({
  category: String,
  items: [{
    value: String,
    label: String
  }]
})

const Sector = mongoose.model('Sector', sectorSchema)

export default Sector;