import {Separator} from "@traxion-global/design-system/react";
import type { ReactNode } from "react";

const styles = {
    container: "flex flex-col gap-2.5",
    eventsContainer: "flex flex-col gap-2.5",
    stageTitle: "text-sm font-medium",
    separator: "my-2"
};

interface CartaPorteStageEventsWrapperProps {
    title: string;
    children: ReactNode;
}

function CartaPorteStageEventsWrapper({title, children}: CartaPorteStageEventsWrapperProps){
    return <div className={styles.container}>
        <Separator className={styles.separator} />
        <h3 className={styles.stageTitle}>{title}</h3>
        <div className={styles.eventsContainer}>{children}</div>
    </div>
}

export default CartaPorteStageEventsWrapper;
