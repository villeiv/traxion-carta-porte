import {useState} from "react";
import type { TripLogInfoUI, TripLogResponse } from "@/features/CartaPorte/domain/types";
import { mapTripLogResponseToInfoUI } from "../domain/mappers";

function useCartaPorteLog(logs: TripLogResponse[]) {
    const [open, setOpen] = useState(false);
    const [logInfo, setLogInfo] = useState<TripLogInfoUI>(() => mapTripLogResponseToInfoUI(undefined));

    function showLog(id: number) {
        setLogInfo(mapTripLogResponseToInfoUI(logs.find(log => log.trip_id === id)));
        setOpen(true);
    }

    return { showLog, open, setOpen, logInfo };
}

export default useCartaPorteLog;