import {Select, SelectValue, SelectContent, SelectItem, SelectTrigger} from "@traxion-global/design-system/react";

type SelectFilterProps = {
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    value?: string;
    placeholder?: string;
};

export function SelectFilter({ options, value, onChange, placeholder }: SelectFilterProps) {
    //vos renderizas un select genérico
    return <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-white sm:w-[170px] text-secondary sm:text-xs">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {
                options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))
            }
        </SelectContent>
    </Select>
}