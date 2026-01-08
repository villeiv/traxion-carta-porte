import {Badge, Button} from "@traxion-global/design-system/react";
import { TripStageStatus } from "../domain/types";
import { Ellipsis, EllipsisVertical } from "lucide-react";

const styles = {
    container: "flex justify-between items-center border rounded-lg p-2 mt-2 hover:bg-accent cursor-pointer",
    leftContainer: "flex flex-col",
    label: "text-sm font-medium text-muted-foreground",
    date: "text-xs font-normal text-muted-foreground"
};

interface TripPillProps {
    tripId: number;
    label: string;
    date: string;
    status: TripStageStatus;
    onPillClick?: (tripId: number, action: "log" | "filter") => void;
}

const TRIP_STAGE_STATUS_LABEL: Record<TripStageStatus, string> = {
  completed: "Completado",
  blocked: "Bloqueado",
  in_progress: "En progreso",
  warning: "Advertencia",
};

export function getTripStageStatusLabel(status: TripStageStatus) {
  return TRIP_STAGE_STATUS_LABEL[status];
}

function TripPill({tripId, label, status, date, onPillClick}: TripPillProps) {
    return <div className={styles.container} onClick={_=>onPillClick?.(tripId, "filter")}>
    
        <div className={styles.leftContainer}>
            <span className={styles.label}>{label}</span>
            <span className={styles.date}>{date}</span>
        </div>
        {
            <Badge variant={status === "warning" ? "yellow" : status === "blocked" ? "red" : status === "completed" ? "green" : "gray"}>{getTripStageStatusLabel(status)}</Badge>
        }
        
    </div>
}

export default TripPill;