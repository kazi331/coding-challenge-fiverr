import mongoose from "mongoose";
const { MongoClient } = require('mongodb');

const dbURI = `mongodb+srv://smoothies:plVBrcdbOPvFVfP3@cluster0.oxxl7li.mongodb.net/`

// mongoose connection
const mongooseConnection = () => {
  mongoose.connect(dbURI, { dbName: 'coding-challenge' })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))
}


// mongodb connection
let collection;
const mongodbConnection = async () => {
  const client = new MongoClient(dbURI, {useUnifiedTopology: true,useNewUrlParser: true});
  const dbName = 'coding-challenge';
  const connect = async () => {
    await client.connect()
    console.log('mongodb connected')
    const db = client.db(dbName)
    collection = db.collection('sectors');
    // return collection;
  }
  await connect()
    .then(() => console.log('db connected'))
    .catch(err => console.log({ dbError: err }))
    .finally(() => client.close())

}

export { mongooseConnection, mongodbConnection, collection };