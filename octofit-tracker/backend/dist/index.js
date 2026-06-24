"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const user_1 = require("./models/user");
const team_1 = require("./models/team");
const activity_1 = require("./models/activity");
const leaderboard_1 = require("./models/leaderboard");
const workout_1 = require("./models/workout");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (0, config_1.getPort)();
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/octofit_db";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
async function connectToDatabase() {
    await mongoose_1.default.connect(mongoUri);
    console.log("Connected to MongoDB");
}
connectToDatabase().catch((error) => {
    console.error("MongoDB connection error", error);
});
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "OctoFit Tracker API is running" });
});
app.get("/api/users", async (_req, res) => {
    const users = await user_1.User.find({}).lean();
    res.json({
        message: "Users route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: users,
    });
});
app.get("/api/teams", async (_req, res) => {
    const teams = await team_1.Team.find({}).lean();
    res.json({
        message: "Teams route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: teams,
    });
});
app.get("/api/activities", async (_req, res) => {
    const activities = await activity_1.Activity.find({}).lean();
    res.json({
        message: "Activities route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: activities,
    });
});
app.get("/api/leaderboard", async (_req, res) => {
    const leaderboard = await leaderboard_1.Leaderboard.find({}).lean();
    res.json({
        message: "Leaderboard route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: leaderboard,
    });
});
app.get("/api/workouts", async (_req, res) => {
    const workouts = await workout_1.Workout.find({}).lean();
    res.json({
        message: "Workouts route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: workouts,
    });
});
app.listen(port, "0.0.0.0", () => {
    console.log(`OctoFit backend listening on port ${port}`);
});
