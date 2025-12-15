import {Alert, AlertDescription, AlertTitle} from "@/components/app-ui/Alert";
import {AlertCircleIcon} from "lucide-react";

function CartaPorteAlerts({alerts}){

    const styles = {
        container: "flex flex-col gap-2"
    };

    if (alerts.length === 0) return null;

    return <div className={styles.container}>{
        alerts.map((alert, index) => {
            return <Alert key={"alert-"+index} variant={alert.type}>
                <AlertCircleIcon />
                <AlertTitle>{alert.title}</AlertTitle>
                <AlertDescription>{alert.message}</AlertDescription>
            </Alert>
        })
    }</div>
}

export default CartaPorteAlerts;