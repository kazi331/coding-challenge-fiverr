import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("coding-challenge");
  switch (req.method) {
    case "POST":
      let result = await db.collection("appointments").insertOne(req.body);
      res.json(result);
      break;
    case "GET":
      const appointments = await db.collection("appointments").find({}).toArray();
      res.json({ appointments });
      break;
    case "DELETE":
      const deleted = await db.collection("appointments").deleteOne({ _d: req.body.id });
      res.json({ status: 'success', deleted });
      break;
  }
}