import { Character } from '../entity/Character';
import { Health } from '../entity/Health';
import { MainStatProvider } from '../../app/provider/MainStatProvider';
import { MainStatEnum } from '../factory/MainStatEnum';
import { SubStatEnum } from '../factory/SubStatEnum';
import { MainStat } from '../entity/MainStat';
import { SubStat } from '../entity/SubStat';
import { SubStatModifierCalculator } from '../factory/SubStatModifierCalculator';
import { SavingThrow } from '../entity/SavingThrow';
import { SpellInventory } from '../entity/SpellInventory';
import { CharacterInfo } from '../entity/CharacterInfo';

export class CharacterBuilder {
    private character: Character;

    constructor() {
        this.initCharacter();
    }

    private initCharacter(): void{
        this.character = new Character();
        this.character.inventory = [];
        this.character.spellInventory = new SpellInventory();
        this.character.characterInfo = new CharacterInfo();
        this.initMainStats();
        this.initHealth();
        this.initSavingThrows();
    }

    private initMainStats(): void {
        this.character.setMainstats(MainStatProvider.getInstance().get());
    }

    private initHealth(): void {
        this.character.setHealth(new Health(30));
    }

    private initSavingThrows(): void {
        this.character.setSavingThrows(
            Object.keys(MainStatEnum).map(mainstat => new SavingThrow(MainStatEnum[mainstat], 0, false))
        );
    }

    public fromCharacter(character: Character): CharacterBuilder {
        this.character = character;
        return this;
    }

    public mainStats(mainStats: MainStat[]): CharacterBuilder {
        this.character.setMainstats(mainStats);
        this.recalculateSubStats();
        this.recalculateSavingThrows();
        return this;
    }

    public subStats(mainStatEnum: MainStatEnum, substats: SubStat[]): CharacterBuilder{
        this.character.getMainstats().find(m => m.getName() === mainStatEnum).setSubstats(substats);
        this.recalculateSubStats();
        return this;
    }

    public mainStat(mainStatEnum: MainStatEnum, value: number): CharacterBuilder{
        const mainstats: MainStat[] = this.character.getMainstats();
        const mainstat: MainStat = mainstats.find(m => m.getName() === mainStatEnum);

        const increment = value - mainstat.getValue();
        mainstat.incrementBy(increment);

        this.recalculateSubStats();
        this.recalculateSavingThrows();
        return this;
    }

    public subStat(subStatEnum: SubStatEnum, proficient: boolean): CharacterBuilder{
        this.character.getMainstats().forEach(
            mainstat => {
                const subStats: SubStat[] = mainstat.getSubstats();
                const subStat: SubStat = subStats.find(ss => ss.getName() === subStatEnum);
                if (subStat !== undefined){
                    subStat.setProficient(proficient);
                }
        });
        this.recalculateSubStats();
        this.recalculateSavingThrows();
        return this;
    }

    private recalculateSubStats(): void {
        this.character.getMainstats().forEach(mainstat => {
            mainstat.setSubstatModifier(SubStatModifierCalculator.getInstance().calculateModifierFromMainStat(mainstat));
            mainstat.getSubstats().forEach(substat => {
                const substatModifier = mainstat.getSubstatModifier();
                substat.setValue(substat.isProficient() ? substatModifier + this.character.getProficiencyBonus() : substatModifier);
            });
        });
    }

    private recalculateSavingThrows(): void {
        this.character.getSavingThrows().forEach(savingThrow => {
            const correspondingMS: MainStat =
                this.character.getMainstats().find(mainstat => mainstat.getName() === savingThrow.getName());

            if (correspondingMS !== null && correspondingMS !== undefined){
                savingThrow.setValue(
                    savingThrow.isProficient() ?
                        correspondingMS.getSubstatModifier() + this.character.getProficiencyBonus()
                        :
                        correspondingMS.getSubstatModifier()
                );
            }
        });
    }

    public proficiencyBonus(proficiencyBonus: number): CharacterBuilder {
        this.character.setProficiencyBonus(proficiencyBonus);
        this.recalculateSubStats();
        this.recalculateSavingThrows();
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

    public speed(speed: number): CharacterBuilder {
        this.character.speed = speed;
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

    public health(health: Health): CharacterBuilder {
        this.character.setHealth(health);
        return this;
    }

    public savingThrows(savingThrows: SavingThrow[]): CharacterBuilder{
        this.character.savingThrows = savingThrows;
        return this;
    }

    public build(): Character{
        return this.character;
    }
}
