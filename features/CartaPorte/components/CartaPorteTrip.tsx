import TripDetail from "@/features/CartaPorte/components/TripDetail";
import TripPill from "@/features/CartaPorte/components/TripPill";
import StageRequirement from "@/features/CartaPorte/components/StageRequirement";

export function CartaPorteTrip({trip, onTripClick}) {
    return (
        <TripDetail
            onLogClick={() => onTripClick?.(trip.tripId, "log")}
            trigger={
                <TripPill
                    key={"pill-" + trip.tripId}
                    tripId={trip.tripId}
                    label={trip.tripName}
                    date={trip.tripPlannedStartAt}
                    status={trip.status}
                    statusLabel={trip.statusLabel}
                    onPillClick={() => onTripClick?.(trip.tripName, "filter")}
                />
            }
        >
            {trip.requirements.map((requirement, index) => (
                <StageRequirement
                    key={trip.tripId + "-req-" + index}
                    fulfillmentStatus={requirement.status}
                >
                    {requirement.label}
                </StageRequirement>
            ))}
        </TripDetail>
    );
}