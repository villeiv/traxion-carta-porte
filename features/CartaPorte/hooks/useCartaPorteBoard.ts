import {useMemo} from "react";
import applyCartaPorteFilters from "@/features/CartaPorte/domain/applyCartaPorteFilters";
import mapCartaPorteDataToColumns from "@/features/CartaPorte/domain/mapCartaPorteDataToColumns";

function useCartaPorteBoard(data, filters){
    //este hook recibe data y filters y devuelve una filtrada y lista para consumir en CartaPorteBoard
    const filteredData = useMemo(
        () => applyCartaPorteFilters(data, filters),
        [data, filters]
    );

    const columns = useMemo(
        () => mapCartaPorteDataToColumns(filteredData),
        [filteredData]
    );

    return { columns };
}

export default useCartaPorteBoard;