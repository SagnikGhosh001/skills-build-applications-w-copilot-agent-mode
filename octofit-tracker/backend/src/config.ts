export function getApiBaseUrl(): string {
    const codespaceName = process.env.CODESPACE_NAME;

    if (codespaceName) {
        return `https://${codespaceName}-8000.app.github.dev`;
    }

    return "http://localhost:8000";
}

export function getPort(): number {
    return Number(process.env.PORT || 8000);
}
