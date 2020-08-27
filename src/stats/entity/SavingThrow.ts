export class SavingThrow {

    public name: string;
    public value: number;
    public proficient: boolean;

    constructor(name?: string, value?: number, proficient?: boolean){
        this.name = name;
        this.value = value;
        this.proficient = proficient;
    }

    public fromSavingThrows(other: SavingThrow): SavingThrow {
        this.name = other.name;
        this.value = other.value;
        this.proficient = other.proficient;

        return this;
    }

    public getName(): string {
        return this.name;
    }

    public getValue(): number {
        return this.value;
    }

    public isProficient(): boolean {
        return this.proficient;
    }

    public setName(value: string): void {
        this.name = value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public setProficient(value: boolean): void {
        this.proficient = value;
    }

}
