"use client"

import CartaPorteFilterFeature from "@/features/CartaPorte/CartaPorteFilterFeature";
import {useFilters} from "@/hooks/useFilters";
import CartaPorteBoard from "@/features/CartaPorte/components/CartaPorteBoard";
import initialData from "@/data";
import useCartaPorteBoard from "@/features/CartaPorte/hooks/useCartaPorteBoard";
import useCartaPorteAlerts from "@/features/CartaPorte/hooks/useCartaPorteAlerts";
import CartaPorteAlerts from "@/features/CartaPorte/components/CartaPorteAlerts";
import CartaPorteLog from "@/features/CartaPorte/components/CartaPorteLog";
import useCartaPorteLog from "@/features/CartaPorte/hooks/useCartaPorteLog";

function CartaPorteControlFeature() {
    //orquesta los hooks y componentes necesarios para listar y filtrar las etapas de transporte
    const { filters, updateFilter } = useFilters();
    const { columns } = useCartaPorteBoard(initialData, filters);
    const alerts = useCartaPorteAlerts();
    const { showLog, open, setOpen, logInfo } = useCartaPorteLog(initialData.logs);

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
        <CartaPorteLog logInfo={logInfo} open={open} setOpen={setOpen} />
        <CartaPorteFilterFeature />
        <CartaPorteBoard columns={columns} onTripClick={onTripClick}/>
    </div>
}

export default CartaPorteControlFeature;