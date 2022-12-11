import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  agree: Boolean,
  name: String,
  sectors: [
    {
      key: String,
      label: String,
      value: String,
    }
  ]
})

// const Appointment = mongoose.model('Appointment', appointmentSchema); // contains override errors
const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema); // fixed 

export default Appointment;