"use client"

import CartaPorteFilterFeature from "@/features/CartaPorte/CartaPorteFilterFeature";
import {useFilters} from "@/hooks/useFilters";
import CartaPorteBoard from "@/features/CartaPorte/components/CartaPorteBoard";
import initialData from "@/data";
import useCartaPorteBoard from "@/features/CartaPorte/hooks/useCartaPorteBoard";
import useCartaPorteAlerts from "@/features/CartaPorte/hooks/useCartaPorteAlerts";
import CartaPorteAlerts from "@/features/CartaPorte/components/CartaPorteAlerts";
import {Dialog, DialogContent, DialogDescription, DialogTitle, DialogHeader} from "@traxion-global/design-system/react";
import {useState} from "react";

function CartaPorteControlFeature() {
    //orquesta los hooks y componentes necesarios para listar y filtrar los pedimentos
    const { filters, updateFilter } = useFilters();
    const { columns } = useCartaPorteBoard(initialData, filters);
    const alerts = useCartaPorteAlerts();
    const { showLog, open, setOpen, logInfo } = useCartaPorteLog();

    function onTripClick(tripId: string, type: "filter" | "log") {
        switch (type) {
            case "filter":
                updateFilter("id", tripId);
                break;
            case "log":
                showLog(tripId)
                break;
        }
    }

    return <div className={"flex flex-col gap-4"}>
        <CartaPorteAlerts alerts={alerts}/>
        <CartaPorteLogFeature logInfo={logInfo} open={open} setOpen={setOpen} />
        <CartaPorteFilterFeature />
        <CartaPorteBoard columns={columns} onTripClick={onTripClick}/>
    </div>
}

function CartaPorteLogFeature({ open, setOpen, logInfo}){
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Título</DialogTitle>
                <DialogDescription>{logInfo}</DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}

function useCartaPorteLog(){
    const [open, setOpen] = useState(false);
    const [logInfo, setLogInfo] = useState(null);

    function showLog(id){
        setLogInfo("loginfo " + id);
        setOpen(true)
    }

    return { showLog, open, setOpen, logInfo }
}

export default CartaPorteControlFeature;