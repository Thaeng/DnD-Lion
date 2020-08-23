import { SubStat } from './SubStat';

export interface SubStatInterface {

    getValue(): number;
    setValue(value: number): void;
    incrementBy(value: number): void;
    decrementtBy(value: number): void;
    getName(): string;
    isEquals(other: SubStatInterface): boolean;
    isProficient(): boolean;
    setProficient(proficient: boolean): void;
    fromSubStat(other: SubStat): SubStatInterface;

}
