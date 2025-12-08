import {useRouter, useSearchParams} from "next/navigation";

export function useFilters() {
    //vos manejas el estado de los filtros usando los search params de la URL
    const searchParams = useSearchParams();
    const router = useRouter();

    function updateFilter(key: string, value: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else if(params.has(key) && !value) {
            params.delete(key);
        }
        router.replace(`?${params.toString()}`, { scroll: false });
    }

    function clearFilters() {
        router.replace("?", { scroll: false });
    }

    function areFiltersActive() {
        return searchParams.toString() !== "";
    }

    return { filters: searchParams, updateFilter, clearFilters, areFiltersActive };
}