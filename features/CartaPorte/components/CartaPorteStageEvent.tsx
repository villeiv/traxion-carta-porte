import {cn} from "@traxion-global/design-system";

const styles = {
    container: "flex text-xs gap-2",
    dateColumn: "w-20 flex-none"
};

const statusStyles = {
    error: "text-red-500",
    in_progress:"text-blue-500",
}

interface CartaPorteStageEventProps {
    date: string;
    status: "success" | "error" | "in_progress";
    message: string;
}

function CartaPorteStageEvent({ date, status, message }: CartaPorteStageEventProps){
    return <div className={cn(styles.container, status==="error"? statusStyles.error: status==="in_progress"? statusStyles.in_progress : "" )}>
        <span className={styles.dateColumn}>{date}</span>
        <span>{message}</span>
    </div>
}

export default CartaPorteStageEvent;