"use client";

import Breadcrumb from "@/components/app-ui/Breadcrumb";
import CartaPorteControlFeature from "@/features/CartaPorte/CartaPorteControlFeature";
import { Suspense, useState } from "react";
import { cn } from "@traxion-global/design-system";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, InlineLoader, Label, Button, Popover, PopoverContent, PopoverTrigger, Calendar } from "@traxion-global/design-system/react";
import { ArrowDown, ArrowUp, Brain, ChartPie } from "lucide-react";
import initialData from "@/data";

export default function CartaPortePage() {
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Monitoreo de Cartas Porte" }
            ]} />
            {/* Main feature */}
            <Suspense fallback={<InlineLoader />}>
                <CartaPorteDashboard />
                <CartaPorteControlFeature />
            </Suspense>
        </>
    );
}

function CartaPorteDashboard() {
    return <CartaPorteAccordion />;
}

function CartaPorteAccordion() {
    const styles = {
        container: "rounded-lg border px-5 py-2 mb-4",
        openedContainer: "pt-4",
        accordionItem: "border-b-0",
        trigger: "p-2 no-underline hover:no-underline",
        content: "pt-4",
    };

    const [openedItem, setOpenedItem] = useState<string | null>(null);

    function onValueChange(openedItem: string) {
        if (openedItem) {
            setOpenedItem(openedItem);
        } else {
            setOpenedItem(null);
        }
    }

    return <Accordion type="single" collapsible className={cn(styles.container, openedItem === "carta-porte-dashboard" && styles.openedContainer)} onValueChange={onValueChange}>
        <AccordionItem value="carta-porte-dashboard" className={styles.accordionItem}>
            <AccordionTrigger className={styles.trigger}>
                <CPDashboardHeader />
            </AccordionTrigger>
            <AccordionContent className={styles.content}>
                <CPDashboardFeature />
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}

function CPDashboardHeader() {
    const styles = {
        container: "flex justify-between items-center w-full"
    };

    return <div className={styles.container}>
        <CPDHeaderTitle />
    </div>;
}

function CPDHeaderTitle() {
    const styles = {
        container: "flex items-center gap-2",
        title: "font-bold text-base",
    };

    return <div className={styles.container}>
        <ChartPie />
        <h2 className={styles.title}>Dashboard</h2>
    </div>;
}

function CPDashboardFeature() {
    const styles = {
        container: "flex gap-6",
        leftColumn: "flex flex-col flex-none w-[45%] gap-4",
        rightColumn: "flex-1",
    };

    const { currentStat, setCurrentStatIndex, currentStatIndex } = useCPDashboardFeature();

    return <div className={styles.container}>
        {/* left */}
        <div className={styles.leftColumn}>
            <CPDControls />
            <StatsBoxesContainer onStatBoxClick={setCurrentStatIndex} currentBox={currentStatIndex} boxes={initialData.stats} />
            <TraxionIntelligenceInsight message={currentStat.message} />
        </div>
        {/* right */}
        <div className={styles.rightColumn}>
            <ChartsContainer data={currentStat.data} />
        </div>
    </div>
}

function useCPDashboardFeature() {
    const [currentStatIndex, setCurrentStatIndex] = useState(0);
    return { 
        currentStat: initialData.stats[currentStatIndex], 
        setCurrentStatIndex,
        currentStatIndex
    }
}

function CPDControls() {
    const styles = {
        container: "grid grid-cols-2 gap-4",
    };

    return <div className={styles.container}>
        <CPDDatePeriodSelector label="Periodo 1:" />
        <CPDDatePeriodSelector label="Periodo 2:" />
    </div>;
}

function CPDDatePeriodSelector({ label }: { label?: string }) {

    const styles = {
        container: "flex justify-between items-center gap-4 flex-wrap",
        label: "font-bold text-sm flex-none",
        dateInput: "flex-1",
    };

    const [from, setFrom] = useState<Date | undefined>(undefined);
    const [to, setTo] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState(false);

    function onSelectDateRange({ from, to }: DateRange) {
        setFrom(from);
        setTo(to);
    }

    return <div className={styles.container}>
        <Label className={styles.label}>{label}</Label>
        <PopOverDateRangePicker from={from} to={to} onSelect={onSelectDateRange} open={open} onOpenChange={setOpen} className={styles.dateInput} />
    </div>
}

interface DateRange {
    from?: Date | undefined;
    to?: Date | undefined;
}

interface PopOverDateRangePickerProps {
    from?: Date | undefined;
    to?: Date | undefined;
    onSelect?: ({ from, to }: DateRange) => void;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

export function PopOverDateRangePicker({ from, to, onSelect, open, onOpenChange, className }: PopOverDateRangePickerProps) {
    return (
        <Popover open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
                <Button
                    id="dates"
                    variant="outline"
                    size={"lg"}
                    className={cn(from && to && "text-muted-foreground", "px-3 py-2", className)}
                >
                    {from && to ? (
                        <>
                            {new Date(from).toLocaleDateString()} - {new Date(to).toLocaleDateString()}
                        </>
                    ) :
                        "Selecciona una fecha"
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent className={"w-auto"}>
                <Calendar
                    className={"p-0"}
                    mode="range"
                    required={true}
                    selected={{
                        from: from,
                        to: to,
                    }}
                    onSelect={onSelect}
                />
                <div className={"flex gap-2 justify-center mt-2"}>
                    <Button size={"sm"} variant={"outline"} onClick={_ => onSelect?.({ from: undefined, to: undefined })}>Borrar</Button>
                    <Button size={"sm"} variant={"outline"} onClick={_ => onOpenChange?.(false)}>Cerrar</Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}

interface StatsBoxesContainerProps {
    onStatBoxClick: (index: number) => void;
    currentBox: number;
    boxes: any[];
}

function StatsBoxesContainer({ onStatBoxClick, currentBox, boxes }: StatsBoxesContainerProps) {
    const styles = {
        container: "grid grid-cols-2 gap-4 ",
    };

    return <div className={styles.container}>
        {
            boxes.map((box, index) => (
                <StatsBox key={index} value={box.value} variation={box.variation} active={currentBox === index} onStatBoxClick={() => onStatBoxClick(index)} description={box.title} />
            ))
        }
    </div>;
}

interface StatsBoxProps {
    value: number;
    variation?: number;
    active?: boolean;
    onStatBoxClick?: () => void;
    description: string;
}

function StatsBox({ value, variation, active, onStatBoxClick, description }: StatsBoxProps) {
    const styles = {
        containerBase: "flex flex-col border p-3 rounded-lg cursor-pointer",
        containerActive: "bg-primary-foreground text-secondary-foreground",
    };

    return <div className={cn(styles.containerBase, active && styles.containerActive)} onClick={onStatBoxClick}>
        <StatsBoxTitle value={value} variation={variation} />
        <p>{description}</p>
    </div>;
}

interface StatsBoxTitleProps {
    value: number;
    variation?: number;
}

function StatsBoxTitle({ value, variation }: StatsBoxTitleProps) {
    const styles = {
        container: "flex items-center gap-2",
        value: "font-bold text-2xl",
    };

    return <div className={styles.container}>
        <h3 className={styles.value}>{value}</h3>
        <StatsResultVariation variation={variation} />
    </div>;
}

interface StatsResultVariationProps {
    variation?: number;
}

function StatsResultVariation({ variation }: StatsResultVariationProps) {

    const styles = {
        container: "flex items-center",
        icon: "w-3.5 h-3.5",
        variationText: "font-bold text-base",
    };

    if (!variation || variation === 0) return null;

    const isPositive = variation > 0;
    const colorClass = isPositive ? "text-primary-dark" : "text-red-500";
    const Icon = isPositive ? ArrowUp : ArrowDown;

    return (
        <div className={styles.container + " " + colorClass}>
            <Icon className={styles.icon} strokeWidth={3} />
            <h5 className={styles.variationText}>{variation}</h5>
        </div>
    );
}

interface ChartsContainerProps {
    data: any;
}

function ChartsContainer({ data }: ChartsContainerProps) {
    const styles = {
        container: "bg-primary",
    };
    return <div className={styles.container}>{data[0].name}</div>;
}

function TraxionIntelligenceInsight({ message }: { message: string }) {
    const styles = {
        container: "flex flex-col radius-md border bg-muted rounded-md p-4 text-muted-foreground gap-2 text-sm",
        header: "flex items-center gap-2",
        title: "font-bold",
    };

    return <div className={styles.container}>
        <div className={styles.header}>
            <Brain />
            <h4 className={styles.title}>Traxion Intelligence</h4>
        </div>
        <p>{message}</p>
    </div>;
}