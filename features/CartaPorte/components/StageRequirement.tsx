import {Circle, CircleCheckBig, CircleEllipsis, CircleX} from "lucide-react";
import {cn} from "@traxion-global/design-system";

const styles = {
    container: "flex items-start gap-2",
    icon: "w-4 h-4 flex-shrink-0",
    description: "text-xs text-card-foreground/80"
};

function StageRequirement({fulfillmentStatus, children: description}) {
    return <div className={styles.container}>
        {
            fulfillmentStatus === "in_progress" ? <CircleEllipsis className={cn(styles.icon, "text-yellow-500")}/> :
                fulfillmentStatus === "completed" ? <CircleCheckBig className={cn(styles.icon, "text-green-500")}/> :
                    fulfillmentStatus === "error" ? <CircleX className={cn(styles.icon, "text-red-500")}/> :
                        <Circle className={cn(styles.icon, "")}/>
        }
        <span className={styles.description}>{description}</span>
    </div>
}

export default StageRequirement;