import type {Metadata} from "next";
import "./globals.css";
import {TooltipProvider, Toaster} from "@traxion-global/design-system/react";
import LayoutApp from "../components/layout/LayoutApp";
import LayoutMain from "../components/layout/LayoutMain";
import MainHeader from "../components/app-ui/MainHeader";
import MainFooter from "../components/app-ui/MainFooter";

export const metadata: Metadata = {
    title: 'Traxion – Carta Porte',
    description: 'Traxion – Carta Porte',
    generator: 'Traxion',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={"density-compact"}>
        <body className={`antialiased`}>
        {/* TooltipProvider */}
        <TooltipProvider>
            {/* Toaster */}
            <Toaster position={"top-right"} closeButton={true}/>
            <LayoutApp>
                <MainHeader/>
                <LayoutMain>{children}</LayoutMain>
                <MainFooter/>
            </LayoutApp>
        </TooltipProvider>
        </body>
        </html>
    );
}
