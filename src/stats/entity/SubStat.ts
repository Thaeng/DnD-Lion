import { SubStatInterface } from './SubstatInterface';
export class SubStat implements SubStatInterface{

    private value: number;
    private name: string;

    constructor(value: number, name: string) {
        this.value = value;
        this.name = name;
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
        return this.name === other.getName() && this.value === other.getValue();
    }
}
