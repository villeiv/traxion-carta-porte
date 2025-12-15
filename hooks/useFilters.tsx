import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useRef} from "react";

export function useFilters() {
    //vos manejas el estado de los filtros usando los search params de la URL
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const debounceTimersRef = useRef<Record<string, number>>({});

    function updateFilter(key: string, value: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else if(params.has(key) && !value) {
            params.delete(key);
        }
        router.replace(`?${params.toString()}`, { scroll: false });
    }

    function updateFilterDebounced( key: string, value: string, delay: number = 250) {
        const existing = debounceTimersRef.current[key];
        if (existing) {
            window.clearTimeout(existing);
        }

        debounceTimersRef.current[key] = window.setTimeout(() => {
            const params = new URLSearchParams(window.location.search);

            if (value) {
                params.set(key, value);
            } else if (params.has(key) && !value) {
                params.delete(key);
            }

            router.replace(
                params.toString() ? `${pathname}?${params.toString()}` : pathname,
                { scroll: false }
            );
        }, delay);
    }

    function clearFilters() {
        Object.values(debounceTimersRef.current).forEach((timerId) => {
            window.clearTimeout(timerId);
        });
        debounceTimersRef.current = {};

        router.replace(pathname, { scroll: false });
    }

    function areFiltersActive() {
        return searchParams.toString() !== "";
    }

    return {
        filters: searchParams,
        updateFilter,
        updateFilterDebounced, // 👈 nueva API, no rompe nada
        clearFilters,
        areFiltersActive,
    };
}