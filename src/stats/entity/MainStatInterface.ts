import { SubStatInterface } from './SubstatInterface';
import { MainStat } from './MainStat';

export interface MainStatInterface {

    getValue(): number;
    setValue(value: number): void;
    getSubstats(): SubStatInterface[];
    setSubstats(substats: SubStatInterface[]): void;
    incrementBy(value: number): void;
    decrementtBy(value: number): void;
    getSubstatModifier(): number;
    setSubstatModifier(modifier: number): void;
    getName(): string;
    getAbbreviation(): string;

    fromMainStat(other: MainStat): MainStatInterface;

}
