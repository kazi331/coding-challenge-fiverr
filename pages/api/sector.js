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
      const sectors = await db.collection("sectors").find({}).toArray();
      res.json({ status: 'success', sectors });
      break;
  }
}