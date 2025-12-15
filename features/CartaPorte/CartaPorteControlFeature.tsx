"use client"

import CartaPorteFilterFeature from "@/features/CartaPorte/CartaPorteFilterFeature";
import {useFilters} from "@/hooks/useFilters";
import CartaPorteBoard from "@/features/CartaPorte/components/CartaPorteBoard";
import initialData from "@/data";
import useCartaPorteBoard from "@/features/CartaPorte/hooks/useCartaPorteBoard";

function CartaPorteControlFeature() {
    //orquesta los hooks y componentes necesarios para listar y filtrar los pedimentos
    const { filters, updateFilter } = useFilters();
    const { columns } = useCartaPorteBoard(initialData, filters);

    function onTripClick(tripId: string, type: "filter" | "log") {
        switch (type) {
            case "filter":
                updateFilter("id", tripId);
                break;
            case "log":
                console.log(`Mostrar log del viaje ${tripId}`);
                break;
        }
    }

    return <div className={"flex flex-col gap-4"}>
        <CartaPorteFilterFeature />
        <CartaPorteBoard columns={columns} onTripClick={onTripClick}/>
    </div>
}

export default CartaPorteControlFeature;