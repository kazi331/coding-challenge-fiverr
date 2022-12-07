
import Appointment from "../../models/appointments";
import mongooseConnect from "../../utils/dbConnect";

mongooseConnect();
export default async function handler(req, res) {
  try {
    const appointments = await Appointment.find();
    res.json({ appointments })

  } catch (error) {
    console.log(error)
  }
}