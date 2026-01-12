"use client";

import Breadcrumb from "@/components/app-ui/Breadcrumb";
import CartaPorteControlFeature from "@/features/CartaPorte/CartaPorteControlFeature";
import { Suspense, useState } from "react";
import { cn } from "@traxion-global/design-system";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, InlineLoader, Label, Button, Popover, PopoverContent, PopoverTrigger, Calendar } from "@traxion-global/design-system/react";
import { ArrowDown, ArrowUp, Brain, ChartPie } from "lucide-react";
import initialData from "@/data";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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

    //this week
    const [period1, setPeriod1] = useState<DateRange>({ from: new Date("2026-01-05T06:00:00-06:00"), to: new Date("2026-01-11T06:00:00-06:00") });
    const [period2, setPeriod2] = useState<DateRange>({ from: new Date("2025-12-29T06:00:00-06:00"), to: new Date("2026-01-04T06:00:00-06:00") });

    return <div className={styles.container}>
        <CPDDatePeriodSelector label="Periodo 1:" from={period1.from} to={period1.to} onSelect={setPeriod1} />
        <CPDDatePeriodSelector label="Periodo 2:" from={period2.from} to={period2.to} onSelect={setPeriod2} />
    </div>;
}

interface CPDDatePeriodSelectorProps {
    label?: string;
    from?: Date | undefined;
    to?: Date | undefined;
    onSelect: (range: DateRange) => void;
}

function CPDDatePeriodSelector({ label, from, to, onSelect }: CPDDatePeriodSelectorProps) {

    const styles = {
        container: "flex justify-between items-center gap-4 flex-wrap",
        label: "font-bold text-sm flex-none",
        dateInput: "flex-1",
    };

    /*const [from, setFrom] = useState<Date | undefined>(undefined);
    const [to, setTo] = useState<Date | undefined>(undefined);*/
    const [open, setOpen] = useState(false);

    function onSelectDateRange({ from, to }: DateRange) {
        /*setFrom(from);
        setTo(to);*/
        onSelect({ from, to });
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
                <StatsBox 
                    key={index} 
                    value={box.value} 
                    variation={box.variation} 
                    invertVariationMeaning={box.invertVariationMeaning}
                    active={currentBox === index} 
                    onStatBoxClick={() => onStatBoxClick(index)} 
                    description={box.title} 
                />
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
    invertVariationMeaning?: boolean;
}

function StatsBox({ value, variation, active, onStatBoxClick, description, invertVariationMeaning }: StatsBoxProps) {
    const styles = {
        containerBase: "flex flex-col border p-3 rounded-lg cursor-pointer",
        containerActive: "bg-primary-foreground text-secondary-foreground",
    };

    return <div className={cn(styles.containerBase, active && styles.containerActive)} onClick={onStatBoxClick}>
        <StatsBoxTitle value={value} variation={variation} invertVariationMeaning={invertVariationMeaning} />
        <p>{description}</p>
    </div>;
}

interface StatsBoxTitleProps {
    value: number;
    variation?: number;
    invertVariationMeaning?: boolean;
}

function StatsBoxTitle({ value, variation, invertVariationMeaning }: StatsBoxTitleProps) {
    const styles = {
        container: "flex items-center gap-2",
        value: "font-bold text-2xl",
    };

    return <div className={styles.container}>
        <h3 className={styles.value}>{value}</h3>
        <StatsResultVariation variation={variation} invertVariationMeaning={invertVariationMeaning} />
    </div>;
}

interface StatsResultVariationProps {
    variation?: number;
    invertVariationMeaning?: boolean;
}

function StatsResultVariation({ variation, invertVariationMeaning }: StatsResultVariationProps) {

    const styles = {
        container: "flex items-center",
        icon: "w-3.5 h-3.5",
        variationText: "font-bold text-base",
    };

    if (variation === undefined || variation === 0) return null;

    const isPositive = variation > 0;
    const isImprovement = invertVariationMeaning ? !isPositive : isPositive;
    const Icon = isPositive ? ArrowUp : ArrowDown;
    const colorClass = isImprovement ? "text-primary-dark" : "text-red-500";
    const displayValue = Math.abs(variation);

    return (
        <div className={`${styles.container} ${colorClass}`}>
            <Icon className={styles.icon} strokeWidth={3} />
            <h5 className={styles.variationText}>{displayValue}</h5>
        </div>
    );
}

interface ChartsContainerProps {
    data: any;
}

function ChartsContainer({ data }: ChartsContainerProps) {
    const styles = {
        container: "",
    };
    return <div className={styles.container}>
        <LineComparissonChart data={data} />
    </div>;
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

function LineComparissonChart({ data }: { data: any[] }) {
    return (
        <LineChart
            style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.9 }}
            responsive
            data={data}
            margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Line name="Periodo 1" type="monotone" dataKey="p1" strokeWidth={3} stroke="#D0DF00" activeDot={{ r: 8 }} />
            <Line name="Periodo 2" type="monotone" dataKey="p2" strokeWidth={3} stroke="#63666A" />
        </LineChart>
    );
}