import { SubStat } from './SubStat';
export class MainStat implements MainStat{

    value: number;
    subStats: SubStat[];
    substatModifier: number;
    name: string;

    constructor(value?: number, subStats?: SubStat[], substatModifier?: number, name?: string) {
        this.value = value;
        this.subStats = subStats;
        this.substatModifier = substatModifier;
        this.name = name;
    }

    fromMainStat(other: MainStat): MainStat {
        this.value = other.value;

        this.subStats = other.subStats;

        this.substatModifier = other.substatModifier;
        this.name = other.name;

        return this;
    }

    getValue(): number {
        return this.value;
    }
    getSubstats(): SubStat[] {
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

    setSubstatModifier(modifier: number): void {
        this.substatModifier = modifier;
    }

    setValue(value: number): void {
        this.value = value;
    }

    setSubstats(substats: SubStat[]): void {
        this.subStats = substats;
    }
}
