import {Button} from "@traxion-global/design-system/react";
import {X} from "lucide-react";
import {useFilters} from "@/hooks/useFilters";

function ResetFiltersButton() {
    //vos renderizas un botón para limpiar los filtros si hay alguno activo
    const { areFiltersActive, clearFilters } = useFilters();

    if (!areFiltersActive()) return null;

    return (
        <Button variant={"outline"} onClick={clearFilters}><X/>Limpiar</Button>
    );
}

export default ResetFiltersButton;