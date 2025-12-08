import {ReactNode} from "react";

export default function LayoutContainer({ children }: { children: ReactNode }) {
    return <div className={"container mx-auto"}>{children}</div>
}