import { Router } from "express";
import { getApiBaseUrl } from "./config";

const router = Router();

router.get("/users", (_req, res) => {
    res.json({
        message: "Users route",
        baseUrl: getApiBaseUrl(),
        items: [
            { id: 1, name: "Ava", role: "Member" },
            { id: 2, name: "Noah", role: "Coach" },
        ],
    });
});

router.get("/teams", (_req, res) => {
    res.json({
        message: "Teams route",
        baseUrl: getApiBaseUrl(),
        items: [
            { id: 1, name: "Momentum Squad" },
            { id: 2, name: "Endurance Crew" },
        ],
    });
});

router.get("/activities", (_req, res) => {
    res.json({
        message: "Activities route",
        baseUrl: getApiBaseUrl(),
        items: [
            { id: 1, type: "Run", duration: "30m" },
            { id: 2, type: "Yoga", duration: "45m" },
        ],
    });
});

router.get("/leaderboard", (_req, res) => {
    res.json({
        message: "Leaderboard route",
        baseUrl: getApiBaseUrl(),
        items: [
            { rank: 1, name: "Ava", points: 980 },
            { rank: 2, name: "Noah", points: 940 },
        ],
    });
});

router.get("/workouts", (_req, res) => {
    res.json({
        message: "Workouts route",
        baseUrl: getApiBaseUrl(),
        items: [
            { id: 1, name: "HIIT Interval", difficulty: "Intermediate" },
            { id: 2, name: "Recovery Flow", difficulty: "Beginner" },
        ],
    });
});

export default router;
