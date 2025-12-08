import {ReactNode} from "react";

export default function LayoutHeader({children}: {children: ReactNode}) {
    return (
        <div className={"bg-secondary h-20"}>
            {children}
        </div>
    );
}
