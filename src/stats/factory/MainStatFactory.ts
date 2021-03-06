import { SubStatEnum } from './SubStatEnum';
import { MainStatEnum } from './MainStatEnum';
import { MainToSubAssociation } from './MainToSubAssociation';
import { MainStat } from '../entity/MainStat';
import { SubStat } from '../entity/SubStat';
import { SubStatModifierCalculator } from './SubStatModifierCalculator';


export class MainStatFactory {

    private static mainToSubMap: Map<MainStatEnum, SubStatEnum[]>;
    private static subStatModifierCalculator: SubStatModifierCalculator;

    private static instance: MainStatFactory;

    private constructor(){}

    public static getInstance(): MainStatFactory {
        if (MainStatFactory.instance === null || MainStatFactory.instance === undefined){
            MainStatFactory.instance = new MainStatFactory();
            MainStatFactory.mainToSubMap = MainToSubAssociation.getInstance().getMainToSubMap();
            this.subStatModifierCalculator = SubStatModifierCalculator.getInstance();
        }
        return MainStatFactory.instance;
    }

    public buildMainStat(mainstatEnum: MainStatEnum, baseValue: number): MainStat{
        let mainstat: MainStat;
        const name: string = mainstatEnum;
        const subStatModifier: number = MainStatFactory.subStatModifierCalculator.calculateModifierFromValue(baseValue);
        const substats: SubStat[] = this.createSubStats(mainstatEnum, subStatModifier);
        mainstat = new MainStat(baseValue, substats, subStatModifier, name);
        return mainstat;
    }

    private createSubStats(mainstatEnum: MainStatEnum, subStatModifier: number): SubStat[]{
        return MainStatFactory.mainToSubMap.get(mainstatEnum).map(substatenum => this.createSubStat(substatenum, subStatModifier));
    }

    private createSubStat(substatEnum: SubStatEnum, subStatModifier: number): SubStat {
        let substat: SubStat;
        substat = new SubStat(subStatModifier, substatEnum, false);
        return substat;
    }
}
