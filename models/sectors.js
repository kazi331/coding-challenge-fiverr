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

// const Sector = mongoose.model('Sector', sectorSchema)
const Sector = mongoose.models.Sector || mongoose.model('Sector', sectorSchema)

export default Sector;