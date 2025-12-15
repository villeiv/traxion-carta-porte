import TripDetail from "@/features/CartaPorte/components/TripDetail";
import TripPill from "@/features/CartaPorte/components/TripPill";
import StageRequirement from "@/features/CartaPorte/components/StageRequirement";

export function CartaPorteTrip({trip, onTripClick}) {
    return (
        <TripDetail
            onLogClick={() => onTripClick?.(trip.id, "log")}
            trigger={
                <TripPill
                    key={"pill-" + trip.id}
                    tripId={trip.id}
                    date={trip.trip_planned_start_at}
                    status={trip.status}
                    statusLabel={trip.statusLabel}
                    onPillClick={() => onTripClick?.(trip.id, "filter")}
                />
            }
        >
            {trip.requirements.map((requirement, index) => (
                <StageRequirement
                    key={trip.id + "-req-" + index}
                    fulfillmentStatus={requirement.status}
                >
                    {requirement.label}
                </StageRequirement>
            ))}
        </TripDetail>
    );
}