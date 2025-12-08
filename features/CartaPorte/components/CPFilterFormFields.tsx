import {SelectFilter} from "@/components/app-ui/SelectFilter";
import {Calendar, Label, Input, Button, Popover, PopoverContent, PopoverTrigger} from "@traxion-global/design-system/react";
import {useFilters} from "@/hooks/useFilters";
import {useState} from "react";

const styles = {
    filterWrapper: "flex gap-2 items-center",
}

export default function CPFilterFormFields() {
    return <>
        <CPIDFilter/>
        <CPCompanyFilter/>
        <CPStatusFilter/>
        <CPDateFilter/>
    </>
}

function CPIDFilter() {
    const {filters, updateFilter} = useFilters();
    return <div className={styles.filterWrapper}>
        <Label>Id: </Label>
        <Input
            type="text"
            placeholder="Buscar por Id"
            onChange={e => updateFilter("id", e.target.value)}
            value={filters.get("id") || ""}
        />
    </div>
}

function CPCompanyFilter() {
    const {filters, updateFilter} = useFilters();
    return <div className={styles.filterWrapper}>
        <Label>Empresa:</Label>
        <SelectFilter
            options={[
                {label: "Empresa 1", value: "empresa_1"},
                {label: "Empresa 2", value: "empresa_2"},
                {label: "Empresa 3", value: "empresa_3"}
            ]}
            onChange={value => updateFilter("company", value)}
            value={filters.get("company") || ""}
            placeholder={"Seleccionar empresa"}
        />
    </div>

}

function CPStatusFilter() {
    const {filters, updateFilter} = useFilters();
    return <div className={styles.filterWrapper}>
        <Label>Status:</Label>
        <SelectFilter
            options={[
                {label: "Status A", value: "a"},
                {label: "Status B", value: "b"},
                {label: "Status C", value: "c"}
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
            const fromDate = range.from ? range.from.toISOString() : "";
            const toDate = range.to ? range.to.toISOString() : "";
            updateFilter("dates", fromDate + "," + toDate);
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <div className={styles.filterWrapper}>
                <Label htmlFor={"dates"}>Fecha:</Label>
                <PopoverTrigger asChild>
                    <Button
                        id="dates"
                        variant="outline"
                        className="font-normal justify-start"
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
            </div>
            <PopoverContent align="start">
                <Calendar
                    mode="range"
                    selected={{
                        from: filters.get("dates") ? new Date(filters.get("dates").split(",")[0]) : null,
                        to: filters.get("dates") ? new Date(filters.get("dates").split(",")[1]) : null,
                    }}
                    onSelect={onSelect}
                />
            </PopoverContent>
        </Popover>
    );
}