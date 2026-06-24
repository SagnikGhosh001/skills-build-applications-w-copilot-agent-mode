"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("./config");
const router = (0, express_1.Router)();
router.get("/users", (_req, res) => {
    res.json({
        message: "Users route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: [
            { id: 1, name: "Ava", role: "Member" },
            { id: 2, name: "Noah", role: "Coach" },
        ],
    });
});
router.get("/teams", (_req, res) => {
    res.json({
        message: "Teams route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: [
            { id: 1, name: "Momentum Squad" },
            { id: 2, name: "Endurance Crew" },
        ],
    });
});
router.get("/activities", (_req, res) => {
    res.json({
        message: "Activities route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: [
            { id: 1, type: "Run", duration: "30m" },
            { id: 2, type: "Yoga", duration: "45m" },
        ],
    });
});
router.get("/leaderboard", (_req, res) => {
    res.json({
        message: "Leaderboard route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: [
            { rank: 1, name: "Ava", points: 980 },
            { rank: 2, name: "Noah", points: 940 },
        ],
    });
});
router.get("/workouts", (_req, res) => {
    res.json({
        message: "Workouts route",
        baseUrl: (0, config_1.getApiBaseUrl)(),
        items: [
            { id: 1, name: "HIIT Interval", difficulty: "Intermediate" },
            { id: 2, name: "Recovery Flow", difficulty: "Beginner" },
        ],
    });
});
exports.default = router;
