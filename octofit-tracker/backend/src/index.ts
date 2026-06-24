import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { getApiBaseUrl, getPort } from "./config";
import { User } from "./models/user";
import { Team } from "./models/team";
import { Activity } from "./models/activity";
import { Leaderboard } from "./models/leaderboard";
import { Workout } from "./models/workout";

dotenv.config();

const app = express();
const port = getPort();
const mongoUri = process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/octofit_db";

app.use(cors());
app.use(express.json());

async function connectToDatabase() {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
}

connectToDatabase().catch((error) => {
    console.error("MongoDB connection error", error);
});

app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "OctoFit Tracker API is running" });
});

app.get("/api/users", async (_req, res) => {
    const users = await User.find({}).lean();
    res.json({
        message: "Users route",
        baseUrl: getApiBaseUrl(),
        items: users,
    });
});

app.get("/api/teams", async (_req, res) => {
    const teams = await Team.find({}).lean();
    res.json({
        message: "Teams route",
        baseUrl: getApiBaseUrl(),
        items: teams,
    });
});

app.get("/api/activities", async (_req, res) => {
    const activities = await Activity.find({}).lean();
    res.json({
        message: "Activities route",
        baseUrl: getApiBaseUrl(),
        items: activities,
    });
});

app.get("/api/leaderboard", async (_req, res) => {
    const leaderboard = await Leaderboard.find({}).lean();
    res.json({
        message: "Leaderboard route",
        baseUrl: getApiBaseUrl(),
        items: leaderboard,
    });
});

app.get("/api/workouts", async (_req, res) => {
    const workouts = await Workout.find({}).lean();
    res.json({
        message: "Workouts route",
        baseUrl: getApiBaseUrl(),
        items: workouts,
    });
});

app.listen(port, "0.0.0.0", () => {
    console.log(`OctoFit backend listening on port ${port}`);
});
