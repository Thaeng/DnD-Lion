import { SubStatInterface } from './SubstatInterface';

export interface MainStatInterface {

    getValue(): number;
    getSubstats(): SubStatInterface[];
    incrementBy(value: number): void;
    decrementtBy(value: number): void;
    getSubstatModifier(): number;
    getName(): string;
    getAbbreviation(): string;

}
