import type { RequirementResponse, Requirement, CartaPorteResponse, CartaPorteBoardColumnUI, TripLogResponse, TripLogInfoUI } from "@/features/CartaPorte/domain/types";
import { parseTripLogEventStatus, parseTripRequirementStatus, parseTripStageStatus } from "./parsers";
import { formatShortDate } from "@/lib/utils";

export function mapRequirementResponseToRequirement(r: RequirementResponse): Requirement {
    return {
        label: r.label,
        status: parseTripRequirementStatus(r.status),
    };
}

export function mapCartaPorteResponseToBoardColumns(data: CartaPorteResponse): CartaPorteBoardColumnUI[] {
    return data.stages.map(stage => {
        return {
            stageId: stage.id,
            title: stage.name,
            tripStages: data.trip_stages
                .filter(tripStage => tripStage.stage_id === stage.id)
                .map(trip => ({
                    tripId: trip.trip_id,
                    name: trip.name,
                    status: parseTripStageStatus(trip.status),
                    requirements: trip.requirements.map(mapRequirementResponseToRequirement),
                    tripPlannedStartAt: formatShortDate(trip.trip_planned_start_at)
                }))
        }
    });
}

export function mapTripLogResponseToInfoUI(logInfo?: TripLogResponse): TripLogInfoUI {
    if (!logInfo) {
        return { title: "", description: "", stages: [] };
    }

    return {
        title: logInfo.trip_name,
        description: `Registro de eventos para viaje: ${logInfo.trip_name}.`,
        stages: logInfo.stages.map(stage => ({
            stageName: stage.name,
            stageEvents: stage.events.map(event => ({
                date: formatShortDate(event.timestamp),
                message: event.message,
                status: parseTripLogEventStatus(event.status),
            })),
        })),
    };
}