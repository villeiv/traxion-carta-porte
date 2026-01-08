import {Circle, CircleCheckBig, CircleEllipsis, CircleX} from "lucide-react";
import {cn} from "@traxion-global/design-system";
import { RequirementStatus } from "../domain/types";

const styles = {
    container: "flex items-start gap-2",
    icon: "w-4 h-4 flex-shrink-0",
    description: "text-xs text-card-foreground/80"
};

interface StageRequirementProps {
    fulfillmentStatus: RequirementStatus;
    children: string;
}

function StageRequirement({fulfillmentStatus, children: description}: StageRequirementProps) {
    return <div className={styles.container}>
        {
            fulfillmentStatus === "in_progress" ? <CircleEllipsis className={cn(styles.icon, "text-yellow-500")}/> :
                fulfillmentStatus === "fulfilled" ? <CircleCheckBig className={cn(styles.icon, "text-green-500")}/> :
                    fulfillmentStatus === "failed" ? <CircleX className={cn(styles.icon, "text-red-500")}/> :
                        <Circle className={cn(styles.icon, "")}/>
        }
        <span className={styles.description}>{description}</span>
    </div>
}

export default StageRequirement;