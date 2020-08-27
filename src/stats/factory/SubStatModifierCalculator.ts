import { MainStat } from '../entity/MainStat';

export class SubStatModifierCalculator {

    private static instance: SubStatModifierCalculator;

    private constructor() { }

    public static getInstance(): SubStatModifierCalculator {
        if (SubStatModifierCalculator.instance === null || SubStatModifierCalculator.instance === undefined) {
            SubStatModifierCalculator.instance = new SubStatModifierCalculator();
        }
        return SubStatModifierCalculator.instance;
    }

    public calculateModifierFromValue(mainStatValue: number): number {
        return Math.floor(mainStatValue / 2) - 5;
    }

    /*
    * e.g.
    * 20 = 5
    * 16 = 3
    * 15 = 2
    * 10 = 0
    * 7 = -2
    * 0 = -5
    */
    public calculateModifierFromMainStat(mainStat: MainStat): number {
        return Math.floor(mainStat.getValue() / 2) - 5;
    }

}
