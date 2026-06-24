"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_MONGO_URI = void 0;
exports.connectToDatabase = connectToDatabase;
exports.disconnectFromDatabase = disconnectFromDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
exports.DEFAULT_MONGO_URI = "mongodb://127.0.0.1:27017/octofit_db";
async function connectToDatabase(mongoUri = process.env.MONGODB_URI || exports.DEFAULT_MONGO_URI) {
    await mongoose_1.default.connect(mongoUri);
    return mongoose_1.default.connection;
}
async function disconnectFromDatabase() {
    await mongoose_1.default.disconnect();
}
