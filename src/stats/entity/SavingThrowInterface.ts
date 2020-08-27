export interface SavingThrowInterface {
    getName(): string;
    getValue(): number;
    setValue(value: number): void;
    isProficient(): boolean;
    setProficient(proficient: boolean): void;
    fromSavingThrows(savingThrows: SavingThrowInterface): SavingThrowInterface;
}
