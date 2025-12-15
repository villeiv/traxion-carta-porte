import Breadcrumb from "@/components/app-ui/Breadcrumb";
import CartaPorteControlFeature from "@/features/CartaPorte/CartaPorteControlFeature";
import { Suspense } from "react";
import {InlineLoader} from "@traxion-global/design-system/react";

export default function CartaPortePage() {
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb items={[
                {label: "Inicio", href: "/"},
                {label: "Monitoreo de Cartas Porte"}
            ]}/>
            {/* Main feature */}
            <Suspense fallback={<InlineLoader />}>
                <CartaPorteControlFeature />
            </Suspense>
        </>
    );
}
