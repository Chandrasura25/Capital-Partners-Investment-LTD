import mongoose from "mongoose"; 

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) return console.log("MONGO_URL not found");
  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    const mongoURLWithDBName = `${process.env.MONGO_URL}/${process.env.DB_NAME}`;
    await mongoose.connect(mongoURLWithDBName);
    isConnected = true;
    console.log(`Connected to MongoDB database: ${process.env.DB_NAME}`);
  } catch (error) {
    console.error(error);
  }
};
