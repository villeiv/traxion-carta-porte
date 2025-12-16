import CartaPorteStageEventsWrapper from "./CartaPorteStageEventsWrapper";
import CartaPorteNoDataEvent from "./CartaPorteNoDataEvent";
import CartaPorteStageEvent from "./CartaPorteStageEvent";
import {Button, Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogFooter} from "@traxion-global/design-system/react";

function CartaPorteLog({ open, setOpen, logInfo}){
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{logInfo.title}</DialogTitle>
                <DialogDescription>{logInfo.description}</DialogDescription>
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
            </DialogHeader>
            <DialogFooter>
                <Button variant={"secondary"} size={"sm"} onClick={_=>setOpen(false)}>Aceptar</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}

export default CartaPorteLog;