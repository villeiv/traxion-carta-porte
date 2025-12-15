export function formatShortDate(isoString, timeZone = "America/Mexico_City") {
    return new Intl.DateTimeFormat("es-MX", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone
    }).format(new Date(isoString));
}
