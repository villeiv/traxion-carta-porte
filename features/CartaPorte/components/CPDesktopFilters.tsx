import CPFilterFormFields from "@/features/CartaPorte/components/CPFilterFormFields";
import ResetFiltersButton from "@/components/app-ui/ResetFiltersButton";

const styles = {
    desktopWrapper: "flex w-full h-18 items-center justify-between gap-4 p-4 rounded-lg bg-card border shadow-sm overflow-auto",
    filterFieldsWrp: "flex gap-5",
};

export default function CPDesktopFilters() {
    return <div className={styles.desktopWrapper}>
        <div className={styles.filterFieldsWrp}>
            <CPFilterFormFields/>
        </div>
        <ResetFiltersButton/>
    </div>
}