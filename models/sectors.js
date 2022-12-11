import mongoose from "mongoose";

const sectorSchema = new mongoose.Schema({
  label: String,
  options: [
    {
      value: String,
      label: String
    }
  ]
})

// const Sector = mongoose.model('Sector', sectorSchema) // contains override error
const Sector = mongoose.models.Sector || mongoose.model('Sector', sectorSchema) // fixed override error

export default Sector;