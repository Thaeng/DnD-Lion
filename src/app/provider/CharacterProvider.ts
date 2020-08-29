import { Character } from '../../stats/entity/Character';
import { CharacterBuilder } from '../../stats/builder/CharacterBuilder';
import { MainStatEnum } from '../../stats/factory/MainStatEnum';
import { SubStatEnum } from '../../stats/factory/SubStatEnum';
import { MainStat } from '../../stats/entity/MainStat';
import { SubStat } from '../../stats/entity/SubStat';
import { SubStatModifierCalculator } from 'src/stats/factory/SubStatModifierCalculator';
import { SavingThrow } from 'src/stats/entity/SavingThrow';
import { Item } from 'src/stats/entity/Item';

export class CharacterProvider {

    private static instance: CharacterProvider;
    private character: Character;
    private constructor(){
    }

    public static getInstance(): CharacterProvider{
        if (CharacterProvider.instance === null || CharacterProvider.instance === undefined){
            CharacterProvider.instance = new CharacterProvider();
        }
        return CharacterProvider.instance;
    }

    public static newCharacter(): CharacterProvider {
        const provider: CharacterProvider = CharacterProvider.getInstance();
        provider.setCharacter(provider.buildNewCharacter());
        return provider;
    }

    public static fromCharacter(character: Character): CharacterProvider {
        const provider: CharacterProvider = CharacterProvider.getInstance();
        provider.setCharacter(character);
        provider.recalculateSubStats();
        provider.recalculateSavingThrows();
        return provider;
    }

    public static supplyCharacter(character: Character): CharacterProvider {
        return CharacterProvider.fromCharacter(character);
    }

    public changeItem(oldItem: Item, newItem: Item): void {
        this.applyItemMainStats(oldItem, -1);
        this.applyItemMainStats(newItem);
        this.recalculateSubStats();
    }

    public addItem(item: Item): void {
        this.character.inventory.push(item);

        this.applyItemMainStats(item);
        this.recalculateSubStats();
    }

    public removeItem(item: Item): void {
        const itemIndex: number = this.character.inventory.lastIndexOf(item);
        this.character.inventory.splice(itemIndex, 1);
        this.recalculateSubStats();
    }

    private applyItemMainStats(item: Item, valueModifier?: number): void {
        valueModifier = valueModifier === null || valueModifier === undefined ? 1 : valueModifier;

        const modifierAndValues: Map<string, string> = this.getModifierValueMap(item);

        const keys: string[] = Array.from(modifierAndValues.keys());

        keys.forEach(key => {
            const relevantMainstat: MainStat = this.character.mainstats.find(mainstat => key === mainstat.name);
            if (relevantMainstat !== null && relevantMainstat !== undefined){
                const modifierValue: number =
                    +modifierAndValues.get(key);
                relevantMainstat.setValue(relevantMainstat.getValue() + (modifierValue * valueModifier));
            }
        });
        this.recalculateSubStats();
    }

    private applyItemSubStats(item: Item, valueModifier?: number): void {
        valueModifier = valueModifier === null || valueModifier === undefined ? 1 : valueModifier;

        const modifierAndValues: Map<string, string> = this.getModifierValueMap(item);
        const keys: string[] = Array.from(modifierAndValues.keys());

        keys.forEach(key => {
            this.character.mainstats.forEach(mainstat => {
                const relevantSubstat: SubStat = mainstat.subStats.find(substat => substat.name === key);
                if (relevantSubstat !== null && relevantSubstat !== undefined){
                    const modifierValue: number = +modifierAndValues.get(key);
                    relevantSubstat.setValue(relevantSubstat.getValue() + (modifierValue * valueModifier));
                }
            });

        });
    }

    private getModifierValueMap(item: Item): Map<string, string> {
        const statModifiers: string[] =
        item.statModifier.trim().split(';').map(modifier => modifier.trim());

        const modifierAndValues: Map<string, string> = new Map();
        statModifiers.forEach(modifier => {
            const parts: string[] = modifier.split(' ');
            const value: string = parts.pop();
            const key: string = parts.join(' ');

            modifierAndValues.set(key, value);
        });

        return modifierAndValues;
    }

    private setCharacter(character: Character): void {
        this.character = character;
    }

    public updateMainstat(mainstatEnum: MainStatEnum, value: number): void{
        const builder: CharacterBuilder = new CharacterBuilder().fromCharacter(this.character);
        this.character = builder.mainStat(mainstatEnum, value).build();
        this.recalculateSubStats();
    }

    public updateSubstat(substatEnum: SubStatEnum, proficient: boolean): void{
        const builder: CharacterBuilder = new CharacterBuilder().fromCharacter(this.character);
        this.character = builder.subStat(substatEnum, proficient).build();
        this.recalculateSubStats();
    }

    public proficiencyChanged(): void {
        this.recalculateSubStats();
        this.recalculateSavingThrows();
    }

    public updateSavingThrow(savingThrow: SavingThrow, proficient: boolean): void{
        savingThrow.setProficient(proficient);
        this.recalculateSavingThrows();
    }

    public setMainStats(mainStats: MainStat[]): void{
        const builder: CharacterBuilder = new CharacterBuilder().fromCharacter(this.character);
        this.character = builder.mainStats(mainStats).build();
    }

    public setSubStats(mainstatEnum: MainStatEnum, subStats: SubStat[]): void{
        const builder: CharacterBuilder = new CharacterBuilder().fromCharacter(this.character);
        this.character = builder.subStats(mainstatEnum, subStats).build();
    }

    public getCharacter(): Character{
        return this.character;
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

    private recalculateSubStats(): void{
        this.character.getMainstats().forEach(mainstat => {
            mainstat.setSubstatModifier(SubStatModifierCalculator.getInstance().calculateModifierFromMainStat(mainstat));
            mainstat.getSubstats().forEach(substat => {
                const substatModifier = mainstat.getSubstatModifier();
                substat.setValue(substat.isProficient() ? substatModifier + this.character.getProficiencyBonus() : substatModifier);
            });
        });

        this.character.inventory.forEach(item => this.applyItemSubStats(item));
    }

    private buildNewCharacter(): Character {
        const newCharacter: Character =
            new CharacterBuilder()
                .characterName('CharacterName')
                .characterClass('CharacterClass')
                .level(1)
                .characterBackground('Background')
                .playerName('PlayerName')
                .race('Race')
                .alignment('Alignment')
                .experience(100)
                .proficiencyBonus(3)
                .armorClass(18)
                .inspiration(0)
                .passiveWisdom(11)
                .build();
        return newCharacter;
    }

}
