import { SubStatEnum } from './SubStatEnum';
import { MainStatEnum } from './MainStatEnum';
export class MainToSubAssociation {

    private static instance: MainToSubAssociation;

    private static mainToSubMap = new Map<MainStatEnum, SubStatEnum[]>();

    private constructor(){}

    public static getInstance(): MainToSubAssociation {
        if (MainToSubAssociation.instance === null || MainToSubAssociation.instance === undefined){
            MainToSubAssociation.instance = new MainToSubAssociation();
            this.mainToSubMap = this.buildMainToSubMap();
        }
        return MainToSubAssociation.instance;
    }

    private static buildMainToSubMap(): Map<MainStatEnum, SubStatEnum[]> {
        const mainToSubMap = new Map<MainStatEnum, SubStatEnum[]>();

        mainToSubMap.set(MainStatEnum.STRENGTH, MainToSubAssociation.getStrengthSubStats());
        mainToSubMap.set(MainStatEnum.DEXTERITY, MainToSubAssociation.getDexteritySubStats());
        mainToSubMap.set(MainStatEnum.CONSTITUTION, MainToSubAssociation.getConstitutionSubStats());
        mainToSubMap.set(MainStatEnum.INTELLIGENCE, MainToSubAssociation.getIntelligenceSubStats());
        mainToSubMap.set(MainStatEnum.WISDOM, MainToSubAssociation.getWisdomSubStats());
        mainToSubMap.set(MainStatEnum.CHARISMA, MainToSubAssociation.getCharismaSubStats());

        return mainToSubMap;
    }

    private static getStrengthSubStats(): SubStatEnum[]{
        const substats: SubStatEnum[] = [
            SubStatEnum.ATHLETICS
        ];
        return substats;
    }

    private static getDexteritySubStats(): SubStatEnum[]{
        const substats: SubStatEnum[] = [
            SubStatEnum.ACROBATICS,
            SubStatEnum.SLEIGHT_OF_HAND,
            SubStatEnum.STEALTH
        ];
        return substats;
    }

    private static getCharismaSubStats(): SubStatEnum[]{
        const substats: SubStatEnum[] = [
            SubStatEnum.DECEPTION,
            SubStatEnum.INTIMIDATION,
            SubStatEnum.PERFORMANCE,
            SubStatEnum.PERSUASION
        ];
        return substats;
    }

    private static getIntelligenceSubStats(): SubStatEnum[]{
        const substats: SubStatEnum[] = [
            SubStatEnum.ARCANA,
            SubStatEnum.HISTORY,
            SubStatEnum.INVESTIGATION,
            SubStatEnum.NATURE,
            SubStatEnum.RELIGION
        ];
        return substats;
    }

    private static getConstitutionSubStats(): SubStatEnum[]{
        const substats: SubStatEnum[] = [];
        return substats;
    }

    private static getWisdomSubStats(): SubStatEnum[]{
        const substats: SubStatEnum[] = [
            SubStatEnum.ANIMAL_HANDLING,
            SubStatEnum.INSIGHT,
            SubStatEnum.MEDICINE,
            SubStatEnum.PERCEPTION,
            SubStatEnum.SURVIVAL
        ];
        return substats;
    }

    public getMainToSubMap(): Map<MainStatEnum, SubStatEnum[]> {
        return MainToSubAssociation.mainToSubMap;
    }
}
