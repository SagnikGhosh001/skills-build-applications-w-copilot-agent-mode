import mongoose, { Document, Schema } from "mongoose";

export interface ILeaderboardEntry extends Document {
    name: string;
    points: number;
    rank: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
});

export const Leaderboard = mongoose.model<ILeaderboardEntry>(
    "Leaderboard",
    leaderboardSchema,
);
