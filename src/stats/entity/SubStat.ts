import { SubStatInterface } from './SubstatInterface';
export class SubStat implements SubStatInterface{

    value: number;
    name: string;
    proficient: boolean;

    constructor(value?: number, name?: string, proficient?: boolean) {
        this.value = value;
        this.name = name;
        this.proficient = proficient === null || proficient === undefined ? false : proficient;
    }

    fromSubStat(other: SubStat): SubStatInterface {
        this.value = other.value;
        this.name = other.name;
        this.proficient = other.proficient;

        return this;
    }

    getValue(): number {
        return this.value;
    }

    incrementBy(value: number): void {
        this.value += value;
    }

    decrementtBy(value: number): void {
        this.value += value;
    }

    getName(): string{
        return this.name;
    }

    isEquals(other: SubStat): boolean{
        return this.name === other.getName() && this.value === other.getValue() && this.proficient === other.proficient;
    }

    isProficient(): boolean {
        return this.proficient;

    }
    setProficient(proficient: boolean): void {
        this.proficient = proficient;
     }

     setValue(value: number): void{
         this.value = value;
     }
}
