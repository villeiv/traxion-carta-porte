import {useSearchParams} from "next/navigation";

function useCartaPorteAlerts(){
    const searchParams = useSearchParams();

    if(searchParams.get("fake_warning")){
        return [
            {
                title: "PAC fuera de servicio por estado operativo del proveedor",
                message: "El sistema PAC se encuentra fuera de servicio debido a un problema en el estado operativo del proveedor que lo respalda. Esta situación afecta la disponibilidad general del servicio y no está relacionada con un proceso o viaje específico. El restablecimiento dependerá de la normalización del proveedor.",
                type: "warning"
            }
        ]
    } else if(searchParams.get("fake_error")){
        return [
            {
                title: "PAC fuera de servicio por estado operativo del proveedor",
                message: "El sistema PAC se encuentra fuera de servicio debido a un problema en el estado operativo del proveedor que lo respalda. Esta situación afecta la disponibilidad general del servicio y no está relacionada con un proceso o viaje específico. El restablecimiento dependerá de la normalización del proveedor.",
                type: "destructive"
            }
        ]
    }else{
        return []
    }
}

export default useCartaPorteAlerts;