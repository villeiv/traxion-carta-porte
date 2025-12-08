"use client"

import useBreakpoint from "@/hooks/useBreakpoint";
import CPDesktopFilters from "@/features/CartaPorte/components/CPDesktopFilters";
import CPMobileSheetFilters from "@/features/CartaPorte/components/CPMobileSheetFilters";

export default function CartaPorteFilterFeature() {
    //decide qué filtros mostrar según el breakpoint
    const isWiderThatSm = useBreakpoint("sm");
    return isWiderThatSm
        ? <CPDesktopFilters/>
        : <CPMobileSheetFilters/>;
}