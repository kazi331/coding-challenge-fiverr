import mongoose from "mongoose";
const dbURI = process.env.DB_URI

// mongoose connection
const mongooseConnect = () => {
  mongoose.connect(dbURI, { dbName: 'coding-challenge' })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))
}
export default mongooseConnect;

