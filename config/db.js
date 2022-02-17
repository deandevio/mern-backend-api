import mongoose from "mongoose";

const dbConnection = async () => {
  const db = await mongoose.connect(process.env.DB_URI, {});

  console.log(`The mongo db is connected on host ${db.connection.host}`);
};

export default dbConnection;
