import mongoose, { Document, Schema } from "mongoose";

export interface IActivity extends Document {
    type: string;
    durationMinutes: number;
    userName: string;
    date: string;
}

const activitySchema = new Schema<IActivity>({
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    userName: { type: String, required: true },
    date: { type: String, required: true },
});

export const Activity = mongoose.model<IActivity>("Activity", activitySchema);
