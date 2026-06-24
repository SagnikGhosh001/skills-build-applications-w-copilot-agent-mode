import mongoose from "mongoose";

export const DEFAULT_MONGO_URI = "mongodb://127.0.0.1:27017/octofit_db";

export async function connectToDatabase(
    mongoUri: string = process.env.MONGODB_URI || DEFAULT_MONGO_URI,
) {
    await mongoose.connect(mongoUri);
    return mongoose.connection;
}

export async function disconnectFromDatabase() {
    await mongoose.disconnect();
}
