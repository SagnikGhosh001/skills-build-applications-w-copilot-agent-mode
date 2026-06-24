"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiBaseUrl = getApiBaseUrl;
exports.getPort = getPort;
function getApiBaseUrl() {
    const codespaceName = process.env.CODESPACE_NAME;
    if (codespaceName) {
        return `https://${codespaceName}-8000.app.github.dev`;
    }
    return "http://localhost:8000";
}
function getPort() {
    return Number(process.env.PORT || 8000);
}
