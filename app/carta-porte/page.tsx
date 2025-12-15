import Breadcrumb from "@/components/app-ui/Breadcrumb";
import CartaPorteControlFeature from "@/features/CartaPorte/CartaPorteControlFeature";

export default function CartaPortePage() {
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb items={[
                {label: "Inicio", href: "/"},
                {label: "Monitoreo de Cartas Porte"}
            ]}/>
            {/* Main feature */}
            <CartaPorteControlFeature />
        </>
    );
}
