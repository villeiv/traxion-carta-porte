import {formatShortDate} from "@/lib/utils";

function mapCartaPorteDataToColumns(data) {
    return data.stages.map(stage => {
        return {
            id: stage.id,
            title: stage.name,
            trips: data.trip_stage_status
                .filter(tripStage => tripStage.stage_id === stage.id)
                .map(trip => ({
                    id: trip.name,
                    status: trip.status,
                    statusLabel: trip.status_label,
                    requirements: trip.requirements,
                    trip_planned_start_at: formatShortDate(trip.trip_planned_start_at)
                }))
        }
    });
}

export default mapCartaPorteDataToColumns;