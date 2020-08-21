export interface SubStatInterface {

    getValue(): number;
    incrementBy(value: number): void;
    decrementtBy(value: number): void;
    getName(): string;
    isEquals(other: SubStatInterface): boolean;

}
