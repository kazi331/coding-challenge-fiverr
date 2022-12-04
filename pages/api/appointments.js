import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("coding-challenge");
  switch (req.method) {
    case "POST":
      // let bodyObject = JSON.parse(req.body);
      let result = await db.collection("appointments").insertOne(req.body);
      res.json(result);
      break;
    case "GET":
      const appointments = await db.collection("appointments").find({}).toArray();
      res.json({ appointments });
      break;
  }
}