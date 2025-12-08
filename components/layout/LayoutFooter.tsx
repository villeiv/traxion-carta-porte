import {ReactNode} from "react";

export default function LayoutFooter({children}: {children: ReactNode}) {
    return (
        <footer className={"flex flex-col items-center gap-2 py-4 sm:py-8 px-2 mt-auto text-xs text-muted-foreground/80 sm:flex-row sm:justify-center sm:gap-8"}>
            {children}
        </footer>
    );
}
