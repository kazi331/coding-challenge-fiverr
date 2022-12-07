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

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

export default Appointment;