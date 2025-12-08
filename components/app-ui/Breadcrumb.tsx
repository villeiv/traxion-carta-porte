import {ChevronRight, Home} from "lucide-react";
import Link from "next/link";

export default function Breadcrumb({ items }) {
    return (
        <nav className="flex pl-2 sm:pl-6 overflow-hidden h-10 mb-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 font-medium text-xs sm:text-sm md:space-x-3 w-full">
                {items.map((item, index) => {
                    const hasLink = item.href && item.href !== "";
                    const isFirst = index === 0;
                    const isLast = index === items.length - 1;

                    const Icon = isFirst ? Home : ChevronRight;

                    // Añadir min-w-[70px] SOLO al último ítem
                    const textClasses = `flex-1 block truncate whitespace-nowrap overflow-hidden text-ellipsis ${
                        isLast ? "min-w-[120px]" : ""
                    }`;

                    return hasLink ? (
                        <li key={`b-item-${index}`} className="inline-flex items-center min-w-0">
                            <Icon className="w-4 h-4 mr-2 shrink-0 text-muted-foreground" />
                            <Link
                                href={item.href}
                                className={`text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-muted-foreground/30 ${textClasses}`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ) : (
                        <li key={`b-item-${index}`} aria-current="page" className="flex items-center min-w-0">
                            <Icon className="w-4 h-4 mr-2 shrink-0 text-muted-foreground" />
                            <span className={`${isLast ? "text-foreground" : "text-muted-foreground"} ${textClasses}`}>
                                {item.label}
                            </span>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
