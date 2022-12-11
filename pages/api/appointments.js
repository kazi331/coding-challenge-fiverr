import Appointment from "../../models/appointment";
import mongooseConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  // First, check if the request method is supported
  if (req.method !== "POST" && req.method !== "GET" && req.method !== "DELETE") {
    // If it's not, return an error message
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  mongooseConnect(); // connect db
  try {
    switch (req.method) {
      case "POST":
        await Appointment.create(req.body);
        res.json({ status: 'success' });
        break;
      case "GET":
        const appointments = await Appointment.find();
        res.json({ appointments });
        break;
      case "DELETE":
        const deleted = await Appointment.deleteOne({ _id: req.query.id });
      res.json({ status: 'success', deleted });
        break;
    }
  } catch (err) {
    console.log(err)
  }
}