import {SelectFilter} from "@/components/app-ui/SelectFilter";
import {Calendar, Label, Input, Button, Popover, PopoverContent, PopoverTrigger} from "@traxion-global/design-system/react";
import {useFilters} from "@/hooks/useFilters";
import {useEffect, useState} from "react";
import {cn} from "@traxion-global/design-system";

const styles = {
    filterWrapper: "flex gap-2 items-center",
}

export default function CPFilterFormFields() {
    return <>
        <CPIDFilter/>
        <CPCompanyFilter/>
        <CPClientFilter />
        <CPStatusFilter/>
        <CPDateFilter/>
    </>
}

function CPIDFilter() {
    const { filters, updateFilterDebounced } = useFilters();
    const [localValue, setLocalValue] = useState(filters.get("id") || "");

    useEffect(() => {
        setLocalValue(filters.get("id") || "");
    }, [filters]);

    function onChange(e) {
        const value = e.target.value;
        setLocalValue(value);
        updateFilterDebounced("id", value);
    }

    return (
        <Input
            type="text"
            placeholder="Buscar por Id"
            className="h-9"
            value={localValue}
            onChange={onChange}
        />
    );
}

function CPClientFilter() {
    const {filters, updateFilter} = useFilters();
    return <div className={styles.filterWrapper}>
        <Label>Cliente:</Label>
        <SelectFilter
            options={[
                {label:"Todos", value: null },
                {label: "Amazon", value: "amazon"},
                {label: "Roche", value: "roche"},
                {label: "FAST", value: "fast"}
            ]}
            onChange={value => updateFilter("client", value)}
            value={filters.get("client") || ""}
            placeholder={"Seleccionar cliente"}
        />
    </div>
}

function CPCompanyFilter() {
    const {filters, updateFilter} = useFilters();
    return <div className={styles.filterWrapper}>
        <Label>Empresa:</Label>
        <SelectFilter
            options={[
                {label:"Todas", value: null },
                {label: "Egoba", value: "egoba"},
                {label: "MyM", value: "mym"},
                {label: "Medistik", value: "medistik"}
            ]}
            onChange={value => updateFilter("company", value)}
            value={filters.get("company") || ""}
            placeholder={"Seleccionar empresa"}
        />
    </div>
}

function CPStatusFilter(){

    const {filters, updateFilter} = useFilters();
    return <div className={styles.filterWrapper}>
        <Label>Status:</Label>
        <SelectFilter
            options={[
                {label:"Todos", value: null },
                {label: "Pendiente", value: "pending"},
                {label: "Advertencia", value: "warning"},
                {label: "Completado", value: "ok"},
                {label: "Error", value: "error"}
            ]}
            onChange={value => updateFilter("status", value)}
            value={filters.get("status") || ""}
            placeholder={"Seleccionar status"}
        />
    </div>
}

function CPDateFilter() {
    const { filters, updateFilter } = useFilters();
    const [open, setOpen] = useState(false);

    function onSelect(range) {
        if (!range) {
            updateFilter("dates", "");
        }else{
            const fromDate = range.from
                ? new Date(
                    new Date(range.from).setHours(0, 0, 0, 0)
                ).toISOString()
                : "";

            const toDate = range.to
                ? new Date(
                    new Date(range.to).setHours(23, 59, 59, 999)
                ).toISOString()
                : "";

            updateFilter("dates", fromDate + "," + toDate);
        }
    }

    return (
        <div className={styles.filterWrapper}>
            <Label htmlFor={"dates"}>Fecha:</Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id="dates"
                        variant="outline"
                        size={"lg"}
                        className={cn(!filters.get("dates") && "text-muted-foreground", "px-3 py-2")}
                    >
                        {filters.get("dates") ? (
                                <>
                                    {new Date(filters.get("dates").split(",")[0]).toLocaleDateString()} - {new Date(filters.get("dates").split(",")[1]).toLocaleDateString()}
                                </>
                            ) :
                            "Selecciona una fecha"
                        }
                    </Button>
                </PopoverTrigger>
                <PopoverContent className={"w-auto"}>
                    <Calendar
                        className={"p-0"}
                        mode="range"
                        selected={{
                            from: filters.get("dates") ? new Date(filters.get("dates").split(",")[0]) : null,
                            to: filters.get("dates") ? new Date(filters.get("dates").split(",")[1]) : null,
                        }}
                        onSelect={onSelect}
                    />
                    <div className={"flex gap-2 justify-center mt-2"}>
                        <Button size={"sm"} variant={"outline"} onClick={_=>updateFilter("dates", "")}>Borrar</Button>
                        <Button size={"sm"} variant={"outline"} onClick={_=>setOpen(false)}>Cerrar</Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}