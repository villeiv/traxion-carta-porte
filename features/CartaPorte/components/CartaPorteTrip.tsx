import TripDetail from "./TripDetail";
import TripPill from "./TripPill";
import StageRequirement from "./StageRequirement";
import { TripStageUI } from "../domain/types";

interface CartaPorteTripProps {
    tripStage: TripStageUI;
    onTripClick?: (tripId: number | string, action: "log" | "filter") => void;
}

export function CartaPorteTrip({tripStage, onTripClick}: CartaPorteTripProps) {
    return (
        <TripDetail
            onLogClick={() => onTripClick?.(tripStage.tripId, "log")}
            trigger={
                <TripPill
                    key={"pill-" + tripStage.tripId}
                    tripId={tripStage.tripId}
                    label={tripStage.name}
                    date={tripStage.tripPlannedStartAt}
                    status={tripStage.status}
                    onPillClick={() => onTripClick?.(tripStage.name, "filter")}
                />
            }
        >
            {tripStage.requirements.map((requirement, index) => (
                <StageRequirement
                    key={tripStage.tripId + "-req-" + index}
                    fulfillmentStatus={requirement.status}
                >
                    {requirement.label}
                </StageRequirement>
            ))}
        </TripDetail>
    );
}