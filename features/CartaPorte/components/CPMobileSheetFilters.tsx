import CPFilterFormFields from "@/features/CartaPorte/components/CPFilterFormFields";
import {Button, Label, SheetClose, SheetContent, SheetTitle, SheetTrigger, Sheet} from "@traxion-global/design-system/react";
import ResetFiltersButton from "@/components/app-ui/ResetFiltersButton";
import {useFilters} from "@/hooks/useFilters";
import {ListFilterPlus} from "lucide-react";

const styles = {
    mobileWrapper: "w-full justify-between bg-card border rounded-lg p-2 flex gap-2",
    sheetTitle: "hidden",
    sheetContent: "w-11/12 sm:w-96",
}

export default function CPMobileSheetFilters() {
    const {filters} = useFilters();

    return <div className={styles.mobileWrapper}>
        <Sheet>
            <SheetTitle className={styles.sheetTitle}/>
            <SheetTrigger asChild>
                <Button variant={"outline"}><ListFilterPlus/> Filtros ({filters.size})</Button>
            </SheetTrigger>
            <SheetContent side="left" className={styles.sheetContent} trapFocus={false}>
                <Label>{`Filtros (${filters.size})`}</Label>
                <CPFilterFormFields/>
                <SheetClose asChild>
                    <Button>Listo</Button>
                </SheetClose>
                <ResetFiltersButton/>
            </SheetContent>
        </Sheet>
        <ResetFiltersButton/>
    </div>
}