import CartaPorteStageEventsWrapper from "./CartaPorteStageEventsWrapper";
import CartaPorteNoDataEvent from "./CartaPorteNoDataEvent";
import CartaPorteStageEvent from "./CartaPorteStageEvent";
import {Button, Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogFooter} from "@traxion-global/design-system/react";

const styles = {
    content:"max-h-[90vh] flex flex-col",
    scrollableContainer:"flex-1 overflow-y-auto px-1"
};

function CartaPorteLog({ open, setOpen, logInfo}){
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={styles.content}>
            <DialogHeader>
                <DialogTitle>{logInfo.title}</DialogTitle>
                <DialogDescription>{logInfo.description}</DialogDescription>
            </DialogHeader>
            <div className={styles.scrollableContainer}>
                {
                    logInfo.stages &&
                    logInfo.stages.map((stage, index) => (
                        <CartaPorteStageEventsWrapper key={"stg-"+index} title={stage.stageName}>
                            {
                                stage.stageEvents.length===0 &&
                                <CartaPorteNoDataEvent />
                            }
                            {
                                stage.stageEvents.map((event, idx) => (
                                    <CartaPorteStageEvent key={"evt-"+idx} date={event.date} status={event.status} message={event.message} />
                                ))
                            }
                        </CartaPorteStageEventsWrapper>
                    ))
                }
            </div>
            <DialogFooter>
                <Button variant={"secondary"} size={"sm"} onClick={_=>setOpen(false)}>Aceptar</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}

export default CartaPorteLog;