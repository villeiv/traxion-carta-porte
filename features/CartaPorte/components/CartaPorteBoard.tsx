import {NoDataMessage} from "@traxion-global/design-system/react";
import {CartaPorteTrip} from "@/features/CartaPorte/components/CartaPorteTrip";
import {CartaPorteColumn} from "@/features/CartaPorte/components/CartaPorteColumn";

const styles = {
    container: "flex w-full gap-4",
};

export function CartaPorteBoard({columns, onTripClick}) {
    return (
        <div className={styles.container}>
            {columns.map(column => (
                <CartaPorteColumn key={"col-" + column.stage_id} title={column.title}>
                    {
                        column.trips.length === 0 ?
                            <NoDataMessage message={"No hay viajes que coincidan con los filtros aplicados."}/>
                            :
                            column.trips.map(trip => (
                                <CartaPorteTrip
                                    key={"trip-" + trip.tripId}
                                    trip={trip}
                                    onTripClick={onTripClick}
                                />
                            ))
                    }
                </CartaPorteColumn>
            ))}
        </div>
    );
}

export default CartaPorteBoard;