"use client"

import LayoutHeader from "@/components/layout/LayoutHeader";
import LogoLink from "@/components/app-ui/LogoLink";
import Link from "next/link";
import {LayoutGrid, X} from "lucide-react";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {cn} from "@traxion-global/design-system";
import LogoGray from "@/components/app-ui/LogoGray";
import LogoWhite from "@/components/app-ui/LogoWhite";

const styles = {
    container: "grid grid-cols-5 items-center px-4 sm:flex sm:container sm:justify-between h-full",
    homeLink: "col-span-3 mx-auto sm:flex sm:justify-center sm:my-auto sm:mx-0",
    logo: "w-36",
    mobileWrapper: "flex flex-col justify-center sm:hidden",
    rightWrapper: "flex gap-6",
    desktopMainNavWrapper: "hidden sm:flex sm:items-center",
    gridIcon: "w-8 h-8 text-primary",
};

type MenuItem = {
    id: string;
    label: string;
    href: string;
};

export default function MainHeader(){
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const navLinks: MenuItem[] = [];

    return <LayoutHeader>
        <div className={styles.container}>
            <div className={styles.mobileWrapper}>
                {
                    mobileNavOpen &&
                    <MobileMainNav
                        links={navLinks}
                        onCloseClick={_=>setMobileNavOpen(false)}
                    />
                }
                {
                    <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        <LayoutGrid className={styles.gridIcon} />
                    </button>
                }
            </div>
            <LogoLink>
                <LogoWhite />
            </LogoLink>
            <div className={styles.rightWrapper}>
                <div className={styles.desktopMainNavWrapper}>
                    <DesktopMainNav links={navLinks}/>
                </div>
            </div>
        </div>
    </LayoutHeader>
}

type DesktopMainNavProps = {
    links: MenuItem[];
};

export function DesktopMainNav({links}: DesktopMainNavProps) {
    return <div className={"flex gap-2"}>{
        links.map((link) => (
            <DesktopMainNavMenuItem
                key={link.id}
                linkLabel={link.label}
                linkHref={link.href}
            />
        ))
    }
    </div>
}

type DesktopMainNavMenuItemProps = {
    linkLabel: string;
    linkHref: string;
};

export function DesktopMainNavMenuItem({linkLabel, linkHref}: DesktopMainNavMenuItemProps) {
    const pathname = usePathname();

    const styles = {
        link: "flex items-center h-10 pl-4 pr-2 gap-2 text-white rounded-md hover:bg-white/10",
        linkWithoutSubmenu: "pr-4",
        linkActive: "bg-white/10"
    };

    function isActive(href) {
        return pathname.startsWith(href) && styles.linkActive;
    }

    return (
        <Link href={linkHref} className={`${styles.link} ${styles.linkWithoutSubmenu} ${isActive(linkHref)}`}>
            {linkLabel}
        </Link>
    )
}

type MobileMainNavProps = {
    links: MenuItem[];
    onCloseClick: () => void;
}

function MobileMainNav({links, onCloseClick}: MobileMainNavProps) {
    const styles = {
        container: "fixed inset-0 z-50 bg-white overflow-y-auto h-dvh w-full overscroll-contain",
        containerClosingAnimation: "animate-out fade-out duration-300",
        header: "grid grid-cols-5 h-20 items-center px-4",
        logo: "w-36 col-span-3 mx-auto",
        linksWrapper: "flex flex-col gap-2 p-4 pt-0 animate-in slide-in-from-left duration-300",
        linksWrapperClosingAnimation: "animate-out slide-out-to-left duration-200",
        closeBtn: "p-0",
        xIcon: "w-8 h-8 text-secondary"
    };

    const router = useRouter();
    const [isClosing, setIsClosing] = useState(false);

    function handleLinkClick(url:string):void {
        handleClose();
        router.push(url);
    }

    function handleClose(): void {
        setIsClosing(true);
        setTimeout(() => {
            onCloseClick();
            setIsClosing(false);
        }, 300);
    }

    const linksToRender = links.map(link => <MobileMainNavMenuItem key={link.id} label={link.label} onClick={e=>handleLinkClick(link.href)} />);

    return (
        <div className={cn(styles.container, isClosing ? styles.containerClosingAnimation : "")} role="dialog" aria-modal="true">
            <div className={styles.header}>
                <button onClick={handleClose} className={styles.closeBtn} aria-label="Cerrar menú">
                    <X className={styles.xIcon}/>
                </button>
                <LogoLink>
                    <LogoGray />
                </LogoLink>
            </div>
            <div className={cn(styles.linksWrapper, isClosing ? styles.linksWrapperClosingAnimation : "")}>
                {linksToRender}
            </div>
        </div>
    );
}

type MobileMainNavMenuItemProps = {
    label: string;
    onClick?: () => void;
}

export function MobileMainNavMenuItem({label, onClick}: MobileMainNavMenuItemProps) {
    const styles = {
        link: "flex p-2 gap-4 w-full shadow-sm hover:bg-secondary/20 transition-colors duration-200",
    };

    return (
        <div className={styles.link} onClick={onClick}>{label}</div>
    );
}
