import Sector from "../../models/sectors";
import mongooseConnect from "../../utils/dbConnect";

mongooseConnect(); // connect to database
export default async function handler(req, res) {
  try {
    const sectors = await Sector.find();
    res.json({ sectors })
  } catch (err) {
    console.log({ err })
  }
}