import {useMemo} from "react";
import applyCartaPorteFilters from "@/features/CartaPorte/domain/applyCartaPorteFilters";
import type {CartaPorteBoardColumnUI, CartaPorteResponse} from "@/features/CartaPorte/domain/types";
import { ReadonlyURLSearchParams } from "next/navigation";
import { mapCartaPorteResponseToBoardColumns } from "@/features/CartaPorte/domain/mappers";

function useCartaPorteBoard(data: CartaPorteResponse, filters: ReadonlyURLSearchParams): { columns: CartaPorteBoardColumnUI[] } {
    //este hook recibe data y filters y devuelve una filtrada y lista para consumir en CartaPorteBoard
    const filteredData = useMemo(
        () => applyCartaPorteFilters(data, filters),
        [data, filters]
    );

    const columns = useMemo(
        () => mapCartaPorteResponseToBoardColumns(filteredData),
        [filteredData]
    );

    return { columns };
}

export default useCartaPorteBoard;