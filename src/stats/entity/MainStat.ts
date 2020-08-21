import {SubStatInterface } from './SubstatInterface';
import { MainStatInterface } from './MainStatInterface';
export class MainStat implements MainStatInterface{

    private value: number;
    private subStats: SubStatInterface[];
    private substatModifier: number;
    private name: string;

    constructor(value: number, subStats: SubStatInterface[], substatModifier: number, name: string) {
        this.value = value;
        this.subStats = subStats;
        this.substatModifier = substatModifier;
        this.name = name;
    }

    getValue(): number {
        return this.value;
    }
    getSubstats(): SubStatInterface[] {
        return this.subStats;
    }
    incrementBy(value: number): void {
        this.value += value;
    }
    decrementtBy(value: number): void {
        this.value += value;
    }

    getSubstatModifier(): number {
        return this.substatModifier;
    }

    getName(): string {
        return this.name;
    }

    getAbbreviation(): string {
        const beginFirstThreeLettersInclusive = 0;
        const endFirstThreeLettersExcluisive = 3;
        return this.name
                    .substring(beginFirstThreeLettersInclusive, endFirstThreeLettersExcluisive)
                    .toUpperCase();
    }
}
