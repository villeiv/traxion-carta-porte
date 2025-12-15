import {IssueCounter} from "@/components/app-ui/IssueCounter";
import {Card, CardContent, CardTitle} from "@traxion-global/design-system/react";

const styles = {
    container: "flex-1 min-w-0",
    header: "flex gap-2 bg-secondary p-4 text-sm text-secondary-foreground font-medium rounded-t-lg",
    content: "p-2 space-y-2",
};

export function CartaPorteColumn({title, children}) {
    return <Card className={styles.container}>
        <CardTitle className={styles.header}>
            {title}
            {
                title === "TMS" &&
                <IssueCounter>1</IssueCounter>
            }
            {
                title === "PAC" &&
                <>
                    <IssueCounter variant={"error"}>1</IssueCounter>
                    <IssueCounter>1</IssueCounter>
                </>
            }
        </CardTitle>
        <CardContent className={styles.content}>{children}</CardContent>
    </Card>
}