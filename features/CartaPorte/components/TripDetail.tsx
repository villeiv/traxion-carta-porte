import {ScrollText} from "lucide-react";
import {Button, HoverCard, HoverCardContent, HoverCardTrigger, Separator} from "@traxion-global/design-system/react";

const styles = {
    content: "space-y-2",
    title: "font-medium text-sm",
    childrenContainer: "space-y-1",
    actionsWrapper: "pt-2 flex justify-end"
};

function TripDetail({trigger, children, onLogClick}) {
    return <HoverCard
        openDelay={50}
        closeDelay={50}
    >
        <HoverCardTrigger>{trigger}</HoverCardTrigger>
        <HoverCardContent
            align="start"
            alignOffset={0}
            side="right"
            sideOffset={-20}
            className={styles.content}
        >
            <span className={styles.title}>Detalle de estado</span>
            <Separator/>
            <div className={styles.childrenContainer}>{children}</div>
            <div className={styles.actionsWrapper}>
                <Button size={"sm"} variant={"outline"} onClick={onLogClick}><ScrollText/>Log</Button>
            </div>
        </HoverCardContent>
    </HoverCard>
}

export default TripDetail;