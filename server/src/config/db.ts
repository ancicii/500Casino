import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Database connected");
  } catch (error) {
    console.error("Error conneting to the database:", error);
    process.exit(1);
  }
};

export default connectDB;