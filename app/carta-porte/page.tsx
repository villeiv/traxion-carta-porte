import Breadcrumb from "@/components/app-ui/Breadcrumb";
import CartaPorteControlFeature from "@/features/CartaPorte/CartaPorteControlFeature";

export default function CartaPortePage() {
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb items={[
                {label: "Inicio", href: "/"},
                {label: "Centro de control de viajes"}
            ]}/>
            {/* Main feature */}
            <CartaPorteControlFeature />
        </>
    );
}
