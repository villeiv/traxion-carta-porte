import { NoDataMessage } from "@traxion-global/design-system/react";
import { CartaPorteTrip } from "@/features/CartaPorte/components/CartaPorteTrip";
import { CartaPorteColumn } from "@/features/CartaPorte/components/CartaPorteColumn";
import { CartaPorteBoardColumnUI } from "../domain/types";

const styles = {
    containerScroller: "overflow-hidden overflow-x-auto sm:overflow-x-hidden pb-4",
    container: "flex gap-4 w-[350vw] sm:w-full h-auto",
};

interface CartaPorteBoardProps {
    columns: CartaPorteBoardColumnUI[];
    onTripClick?: (tripId: number | string, action: "log" | "filter") => void;
}

export function CartaPorteBoard({ columns, onTripClick }: CartaPorteBoardProps) {
    return (
        <div className={styles.containerScroller}>
            <div className={styles.container}>
                {columns.map(column => (
                    <CartaPorteColumn key={"col-" + column.stageId} title={column.title}>
                        {
                            column.tripStages.length === 0 ?
                                <NoDataMessage message={"No hay viajes que coincidan con los filtros aplicados."} />
                                :
                                column.tripStages.map(tripStage => (
                                    <CartaPorteTrip
                                        key={"trip-" + tripStage.tripId}
                                        tripStage={tripStage}
                                        onTripClick={onTripClick}
                                    />
                                ))
                        }
                    </CartaPorteColumn>
                ))}
            </div>
        </div>

    );
}

export default CartaPorteBoard;