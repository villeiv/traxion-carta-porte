import type { RequirementStatus, TripLog, TripLogEventStatus, TripStageStatus } from "@/features/CartaPorte/domain/types";

export function parseTripStageStatus(value: unknown): TripStageStatus {
    if (value === "completed" || value === "blocked" || value === "in_progress" || value === "warning") {
        return value;
    }

    return "warning";
}

export function parseTripRequirementStatus(value: unknown): RequirementStatus {
    if (value === "fulfilled" || value === "failed" || value === "in_progress" || value === "pending") {
        return value;
    }
    return "pending";
}

export function parseTripLogEventStatus(value: unknown): TripLogEventStatus {
    if (value === "success" || value === "error" || value === "in_progress") {
        return value;
    }
    return "in_progress";
}