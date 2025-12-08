"use client"

import CartaPorteFilterFeature from "@/features/CartaPorte/CartaPorteFilterFeature";
import {useFilters} from "@/hooks/useFilters";
import useFetch from "@/hooks/useFetch";

function CartaPorteControlFeature() {
    //orquesta los hooks y componentes necesarios para listar y filtrar los pedimentos
    const {filters} = useFilters();
    console.log(filters.toString());
    //const {data, loading, error, reFetch, setData} = useFetch({fetchFn: getCustomsEntries, shouldFetch: true, query:filters.toString()});

    return <>
        <CartaPorteFilterFeature />
    </>
}

export default CartaPorteControlFeature;