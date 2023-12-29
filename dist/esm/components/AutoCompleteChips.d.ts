import { FC } from 'react';
interface Chip {
    id: number;
    label: string;
}
interface AutoCompleteChipsProps {
    Data: Chip[];
    listOnClick: (data: Chip) => void;
    chipDeleteOnClick: (data: Chip) => void;
    onChange: (data: string) => void;
    chipsData?: Chip[];
    width?: number;
    height?: number;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    chipBgColor?: string;
    chipTextColor?: string;
    chipfontSize?: number;
    chipMargin?: number;
    crossFillColor?: string;
    placeholder?: string;
}
export declare const AutoCompleteChips: FC<AutoCompleteChipsProps>;
export {};
