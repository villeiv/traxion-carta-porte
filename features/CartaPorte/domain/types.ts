//CartaPorte
export interface CartaPorteResponse {
    stages: StageResponse[];
    trip_stages: TripStageResponse[];
    logs: TripLogResponse[];
}

export interface CartaPorte {
    stages: Stage[];
    tripsStages: TripStage[];
    logs: TripLog[];
}

//CartaPorte Board Column
export interface CartaPorteBoardColumnUI{
    stageId: string;
    title: string;
    tripStages: TripStageUI[];
}

//Carta Porte Alert
export interface CartaPorteAlert {
    title: string;
    message: string;
    type: "warning" | "destructive";
}

//Stage
export interface StageResponse {
    id: string;
    name: string;
}

export interface Stage {
    id: string;
    name: string;
}

//Requirement
export interface RequirementResponse {
    label: string;
    status: string;
}

export interface Requirement {
    label: string;
    status: RequirementStatus;
}

export type RequirementStatus = "fulfilled" | "failed" | "in_progress" | "pending";

//TripStage
export interface TripStageResponse {
    id: number;
    trip_id: number;
    name: string;
    client: string;
    company: string;
    trip_planned_start_at: string;
    stage_id: string;
    status: string;
    requirements: RequirementResponse[];
}

export interface TripStage {
    id: number;
    tripId: number;
    name: string;
    client: string;
    company: string;
    tripPlannedStartAt: string;
    stageId: string;
    status: TripStageStatus;
    requirements: Requirement[];
}

export interface TripStageUI {
    tripId: number;
    name: string;
    tripPlannedStartAt: string;
    status: TripStageStatus;
    requirements: Requirement[];
}

export type TripStageStatus = "completed" | "blocked" | "in_progress" | "warning";

//TripLog
export interface TripLogResponse {
    trip_id: number;
    trip_name: string;
    stages: TripLogStageResponse[];
}

export interface TripLog {
    tripId: number;
    tripName: string;
    stages: TripLogStage[];
}

//Trip Log Event
export interface TripLogEventResponse {
    timestamp: string;
    status: string;
    message: string;
}

export interface TripLogEvent {
    timestamp: string;
    status: TripLogEventStatus;
    message: string;
}

export type TripLogEventStatus = "success" | "error" | "in_progress";

//Trip Log Stage
export interface TripLogStageResponse {
    id: string;
    name: string;
    events: TripLogEventResponse[];
}

export interface TripLogStage {
    id: string;
    name: string;
    events: TripLogEvent[];
}

//Trip Log (UI)
export interface TripLogInfoUI {
    title: string;
    description: string;
    stages: {
        stageName: string;
        stageEvents: {
            date: string;
            status: TripLogEvent["status"];
            message: string;
        }[];
    }[];
}