import {ReactNode} from "react";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function LayoutMain({ children }: { children: ReactNode }) {
    return <main className={"pt-4 sm:pt-6 md:pt-8"}>
        <LayoutContainer>
            {children}
        </LayoutContainer>
    </main>
}