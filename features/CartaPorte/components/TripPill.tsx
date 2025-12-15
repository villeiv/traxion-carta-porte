import {Badge} from "@traxion-global/design-system/react";

type TripPillProps = {
    tripId: string;
    date?: string;
    status?: "warning" | "error" | "ok" | "pending";
    statusLabel?: string;
    onPillClick?: (tripId: string, action: "log" | "filter") => void;
}

const styles = {
    container: "flex justify-between items-center border rounded-lg p-2 mt-2 hover:bg-accent cursor-pointer",
    leftContainer: "flex flex-col",
    label: "text-sm font-medium text-muted-foreground",
    date: "text-xs font-normal text-muted-foreground"
};

function TripPill({tripId, status = "ok", statusLabel = "ok", date, onPillClick}: TripPillProps) {
    return <div className={styles.container} onClick={_=>onPillClick?.(tripId, "filter")}>
        <div className={styles.leftContainer}>
            <span className={styles.label}>{tripId}</span>
            <span className={styles.date}>{date}</span>
        </div>
        {
            <Badge variant={status === "warning" ? "yellow" : status === "error" ? "red" : status === "ok" ? "green" : "gray"}>{statusLabel}</Badge>
        }
    </div>
}

export default TripPill;