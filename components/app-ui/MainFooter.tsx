import LayoutFooter from "@/components/layout/LayoutFooter";
import Link from "next/link";

export default function MainFooter(){
    return <LayoutFooter>
        <p>© 2025 Traxión. Todos los derechos reservados.</p>
        <div className={"flex gap-4 sm:gap-8"}>
            <Link href="/" target="_blank">
                Política de privacidad
            </Link>
            <Link href="/" target="_blank">
                Términos de uso
            </Link>
        </div>
    </LayoutFooter>
}