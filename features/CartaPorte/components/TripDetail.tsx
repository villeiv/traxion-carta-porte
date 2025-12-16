import {ScrollText} from "lucide-react";
import {Button, HoverCard, HoverCardContent, HoverCardTrigger, Separator} from "@traxion-global/design-system/react";

const styles = {
    content: "flex flex-col space-y-2.5",
    title: "font-medium text-sm leading-none",
    requirementsContainer: "space-y-2",
    actionsWrapper: "pt-2 flex justify-end",
    logIcon:"text-muted-foreground"
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
            <div className={styles.requirementsContainer}>{children}</div>
            <div className={styles.actionsWrapper}>
                <Button size={"sm"} variant={"outline"} onClick={onLogClick}><ScrollText className={styles.logIcon}/>Log</Button>
            </div>
        </HoverCardContent>
    </HoverCard>
}

export default TripDetail;