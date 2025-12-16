import {formatShortDate} from "@/lib/utils";

function mapLogInfo(logInfo){
    return {
        title: logInfo.tripName,
        description: `Registro de eventos para viaje: ${logInfo.tripName}.`,
        stages:[
            ...logInfo.stages.map(stage=>({
                stageName: stage.name,
                stageEvents: [...stage.events.map(event=>({
                    date: formatShortDate(event.timestamp),
                    message: event.message,
                    status: event.status
                }))]
            }))
        ]
    }
}

export default mapLogInfo;