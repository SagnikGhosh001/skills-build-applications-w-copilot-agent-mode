import { connectToDatabase, disconnectFromDatabase } from "../database";
import { User } from "../models/user";
import { Team } from "../models/team";
import { Activity } from "../models/activity";
import { Leaderboard } from "../models/leaderboard";
import { Workout } from "../models/workout";

// Seed the octofit_db database with test data
async function seedDatabase() {
    await connectToDatabase();
    console.log("Connected to MongoDB");

    await Promise.all([
        User.deleteMany({}),
        Team.deleteMany({}),
        Activity.deleteMany({}),
        Leaderboard.deleteMany({}),
        Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
        {
            name: "Ava Chen",
            email: "ava@example.com",
            role: "Member",
            fitnessGoal: "Improve endurance",
        },
        {
            name: "Noah Patel",
            email: "noah@example.com",
            role: "Coach",
            fitnessGoal: "Build strength",
        },
        {
            name: "Mina Alvarez",
            email: "mina@example.com",
            role: "Member",
            fitnessGoal: "Increase mobility",
        },
    ]);

    const teams = await Team.insertMany([
        {
            name: "Momentum Squad",
            sport: "Running",
            members: [users[0].name, users[2].name],
        },
        {
            name: "Endurance Crew",
            sport: "Cycling",
            members: [users[1].name, users[0].name],
        },
    ]);

    await Activity.insertMany([
        {
            type: "Run",
            durationMinutes: 32,
            userName: users[0].name,
            date: "2026-06-24",
        },
        {
            type: "Strength",
            durationMinutes: 45,
            userName: users[2].name,
            date: "2026-06-23",
        },
        {
            type: "Yoga",
            durationMinutes: 30,
            userName: users[1].name,
            date: "2026-06-22",
        },
    ]);

    await Leaderboard.insertMany([
        { name: users[0].name, points: 980, rank: 1 },
        { name: users[2].name, points: 940, rank: 2 },
        { name: users[1].name, points: 900, rank: 3 },
    ]);

    await Workout.insertMany([
        {
            name: "HIIT Interval",
            difficulty: "Intermediate",
            durationMinutes: 25,
            focus: "Cardio",
        },
        {
            name: "Recovery Flow",
            difficulty: "Beginner",
            durationMinutes: 20,
            focus: "Mobility",
        },
        {
            name: "Power Lift",
            difficulty: "Advanced",
            durationMinutes: 40,
            focus: "Strength",
        },
    ]);

    console.log("Seeded octofit_db with sample data");
    await disconnectFromDatabase();
}

seedDatabase().catch((error) => {
    console.error("Seed failed", error);
    process.exit(1);
});
