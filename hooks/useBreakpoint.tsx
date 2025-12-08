"use client";
import { useState, useEffect } from "react";

// Breakpoints según tailwind.config.js
const breakpoints: Record<string, string> = {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
};

function useBreakpoint(breakpoint: keyof typeof breakpoints, direction: "up" | "down" = "up") {
    const query =
        direction === "up"
            ? `(min-width: ${breakpoints[breakpoint]})`
            : `(max-width: ${breakpoints[breakpoint]})`;

    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);

        onChange(); // valor inicial
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}

export default useBreakpoint;