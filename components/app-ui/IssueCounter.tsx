import {cn} from "@traxion-global/design-system";

interface IssueCounterProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "warning" | "error";
    children?: React.ReactNode;
}

const variantStyles = {
    warning: "bg-yellow-500 text-white",
    error: "bg-red-500 text-white",
};

export function IssueCounter({variant = "warning", className, children, ...props}: IssueCounterProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center rounded-full",
                "min-w-5 h-5 p-1 text-xs font-medium",
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}