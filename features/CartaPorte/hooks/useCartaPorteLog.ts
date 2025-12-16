import {useState} from "react";
import mapLogInfo from "@/features/CartaPorte/domain/mapLogInfo";

function useCartaPorteLog(logs,){
    const [open, setOpen] = useState(false);
    const [logInfo, setLogInfo] = useState({});

    function showLog(id){
        setLogInfo(mapLogInfo(logs.find(log=>log.tripId===id)));
        setOpen(true)
    }

    return { showLog, open, setOpen, logInfo }
}

export default useCartaPorteLog;