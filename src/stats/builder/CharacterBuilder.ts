import { Character } from '../entity/Character';
import { MainStatProvider } from '../../app/provider/MainStatProvider';
import { MainStatEnum } from '../factory/MainStatEnum';
import { SubStatEnum } from '../factory/SubStatEnum';
import { MainStatInterface } from '../entity/MainStatInterface';
import { SubStatInterface } from '../entity/SubstatInterface';
import { SubStatModifierCalculator } from '../factory/SubStatModifierCalculator';
import { MainStat } from '../entity/MainStat';

export class CharacterBuilder {
    private character: Character;

    constructor() {
        this.initCharacter();
    }

    private initCharacter(): void{
        this.character = new Character();
        this.character.setMainstats(MainStatProvider.getInstance().get());
    }

    public fromCharacter(character: Character): CharacterBuilder {
        this.character = character;
        return this;
    }

    public mainStats(mainStats: MainStatInterface[]): CharacterBuilder {
        this.character.setMainstats(mainStats);
        this.recalculateSubStats();
        return this;
    }

    public subStats(mainStatEnum: MainStatEnum, substats: SubStatInterface[]): CharacterBuilder{
        this.character.getMainstats().find(m => m.getName() === mainStatEnum).setSubstats(substats);

        this.recalculateSubStats();
        return this;
    }

    public mainStat(mainStatEnum: MainStatEnum, value: number): CharacterBuilder{
        const mainstats: MainStatInterface[] = this.character.getMainstats();
        const mainstat: MainStatInterface = mainstats.find(m => m.getName() === mainStatEnum);

        const increment = value - mainstat.getValue();
        mainstat.incrementBy(increment);

        this.recalculateSubStats();
        return this;
    }

    public subStat(subStatEnum: SubStatEnum, proficient: boolean): CharacterBuilder{
        this.character.getMainstats().forEach(
            mainstat => {
                const subStats: SubStatInterface[] = mainstat.getSubstats();
                const subStat: SubStatInterface = subStats.find(ss => ss.getName() === subStatEnum);
                if (subStat !== undefined){
                    subStat.setProficient(proficient);
                }
        });
        this.recalculateSubStats();
        return this;
    }

    private recalculateSubStats(): void{
        this.character.getMainstats().forEach(mainstat => {
            mainstat.setSubstatModifier(SubStatModifierCalculator.getInstance().calculateModifierFromMainStat(mainstat));
            mainstat.getSubstats().forEach(substat => {
                const substatModifier = mainstat.getSubstatModifier();
                substat.setValue(substat.isProficient() ? substatModifier + this.character.getProficiencyBonus() : substatModifier);
            });
        });
    }

    public proficiencyBonus(proficiencyBonus: number): CharacterBuilder {
        this.character.setProficiencyBonus(proficiencyBonus);
        this.recalculateSubStats();
        return this;
    }

    public armorClass(armorClass: number): CharacterBuilder {
        this.character.setArmorClass(armorClass);
        return this;
    }

    public level(level: number): CharacterBuilder {
        this.character.setLevel(level);
        return this;
    }

    public experience(experience: number): CharacterBuilder {
        this.character.setExperience(experience);
        return this;
    }

    public inspiration(inspiration: number): CharacterBuilder {
        this.character.setInspiration(inspiration);
        return this;
    }

    public passiveWisdom(passiveWisdom: number): CharacterBuilder {
        this.character.setPassiveWisdom(passiveWisdom);
        return this;
    }

    public characterName(characterName: string): CharacterBuilder {
        this.character.setCharacterName(characterName);
        return this;
    }

    public playerName(playerName: string): CharacterBuilder {
        this.character.setPlayerName(playerName);
        return this;
    }

    public characterClass(characterClass: string): CharacterBuilder {
        this.character.setCharacterClass(characterClass);
        return this;
    }

    public characterBackground(characterBackground: string): CharacterBuilder {
        this.character.setCharacterBackground(characterBackground);
        return this;
    }

    public race(race: string): CharacterBuilder {
        this.character.setRace(race);
        return this;
    }

    public alignment(alignment: string): CharacterBuilder {
        this.character.setAlignment(alignment);
        return this;
    }

    public build(): Character{
        return this.character;
    }
}
