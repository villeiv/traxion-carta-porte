import {Button} from "@traxion-global/design-system/react";
import {X} from "lucide-react";
import {useFilters} from "@/hooks/useFilters";
import useBreakpoint from "@/hooks/useBreakpoint";

function ResetFiltersButton() {
    //vos renderizas un botón para limpiar los filtros si hay alguno activo
    const { areFiltersActive, clearFilters } = useFilters();
    const isMobile = useBreakpoint("sm", "down");

    function resetClick(){
        clearFilters();
    }

    if (!areFiltersActive()) return null;

    return (
        isMobile ?
        <Button variant={"secondary"} onClick={resetClick}><X/>Limpiar filtros</Button>
        :
        <Button variant={"secondary"} size={"lg"} onClick={resetClick}><X/>Limpiar</Button>
    );
}

export default ResetFiltersButton;