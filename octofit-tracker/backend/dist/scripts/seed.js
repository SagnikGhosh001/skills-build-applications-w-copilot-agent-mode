"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
// Seed the octofit_db database with test data
async function seedDatabase() {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
    await mongoose_1.default.connect(mongoUri);
    console.log('Connected to MongoDB');
    await Promise.all([
        user_1.User.deleteMany({}),
        team_1.Team.deleteMany({}),
        activity_1.Activity.deleteMany({}),
        leaderboard_1.Leaderboard.deleteMany({}),
        workout_1.Workout.deleteMany({}),
    ]);
    const users = await user_1.User.insertMany([
        { name: 'Ava Chen', email: 'ava@example.com', role: 'Member', fitnessGoal: 'Improve endurance' },
        { name: 'Noah Patel', email: 'noah@example.com', role: 'Coach', fitnessGoal: 'Build strength' },
        { name: 'Mina Alvarez', email: 'mina@example.com', role: 'Member', fitnessGoal: 'Increase mobility' },
    ]);
    const teams = await team_1.Team.insertMany([
        { name: 'Momentum Squad', sport: 'Running', members: [users[0].name, users[2].name] },
        { name: 'Endurance Crew', sport: 'Cycling', members: [users[1].name, users[0].name] },
    ]);
    await activity_1.Activity.insertMany([
        { type: 'Run', durationMinutes: 32, userName: users[0].name, date: '2026-06-24' },
        { type: 'Strength', durationMinutes: 45, userName: users[2].name, date: '2026-06-23' },
        { type: 'Yoga', durationMinutes: 30, userName: users[1].name, date: '2026-06-22' },
    ]);
    await leaderboard_1.Leaderboard.insertMany([
        { name: users[0].name, points: 980, rank: 1 },
        { name: users[2].name, points: 940, rank: 2 },
        { name: users[1].name, points: 900, rank: 3 },
    ]);
    await workout_1.Workout.insertMany([
        { name: 'HIIT Interval', difficulty: 'Intermediate', durationMinutes: 25, focus: 'Cardio' },
        { name: 'Recovery Flow', difficulty: 'Beginner', durationMinutes: 20, focus: 'Mobility' },
        { name: 'Power Lift', difficulty: 'Advanced', durationMinutes: 40, focus: 'Strength' },
    ]);
    console.log('Seeded octofit_db with sample data');
    await mongoose_1.default.disconnect();
}
seedDatabase().catch((error) => {
    console.error('Seed failed', error);
    process.exit(1);
});
