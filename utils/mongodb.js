import { MongoClient } from 'mongodb'

const uri = 'mongodb+srv://smoothies:plVBrcdbOPvFVfP3@cluster0.oxxl7li.mongodb.net/'
const options = { useUnifiedTopology: true, useNewUrlParser: true, }

let client
let clientPromise


if (process.env.NODE_ENV === 'development') {
  // Replacement()
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise