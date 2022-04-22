import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const response = await MongoClient.connect(
    "mongodb://localhost:27017/nextAuth"
    // "mongodb+srv://daniyal:daniyalatlas2022@cluster0.v412d.mongodb.net/nextAuthDB?retryWrites=true&w=majority"
  );

  return response;
}
