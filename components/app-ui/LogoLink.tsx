import Link from "next/link";
import {cloneElement} from "react";

export default function LogoLink({children}){
    const styles = {
        homeLink: "col-span-3 mx-auto sm:flex sm:justify-center sm:my-auto sm:mx-0",
        logo: "w-36",
    };
    const childrenWithClass = cloneElement(children, {
        className: styles.logo,
    });

    return <Link href={"/"} className={styles.homeLink}>
        {childrenWithClass}
    </Link>
}