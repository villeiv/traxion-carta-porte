import {ReactNode} from "react";

export default function LayoutApp({ children }: { children: ReactNode }) {
    return <div className="min-h-screen flex flex-col">{children}</div>
}