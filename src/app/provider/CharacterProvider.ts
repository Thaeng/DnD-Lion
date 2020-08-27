import { Character } from '../../stats/entity/Character';
import { CharacterBuilder } from '../../stats/builder/CharacterBuilder';
import { MainStatEnum } from '../../stats/factory/MainStatEnum';
import { SubStatEnum } from '../../stats/factory/SubStatEnum';
import { MainStatInterface } from '../../stats/entity/MainStatInterface';
import { SubStatInterface } from '../../stats/entity/SubstatInterface';
import { SubStatModifierCalculator } from 'src/stats/factory/SubStatModifierCalculator';
import { SavingThrowInterface } from 'src/stats/entity/SavingThrowInterface';

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

    private setCharacter(character: Character): void {
        this.character = character;
    }

    public updateMainstat(mainstatEnum: MainStatEnum, value: number): void{
        const builder: CharacterBuilder = new CharacterBuilder().fromCharacter(this.character);
        this.character = builder.mainStat(mainstatEnum, value).build();
    }

    public updateSubstat(substatEnum: SubStatEnum, proficient: boolean): void{
        const builder: CharacterBuilder = new CharacterBuilder().fromCharacter(this.character);
        this.character = builder.subStat(substatEnum, proficient).build();
    }

    public updateSavingThrow(savingThrow: SavingThrowInterface, proficient: boolean): void{
        savingThrow.setProficient(proficient);
        this.recalculateSavingThrows();
    }

    public setMainStats(mainStats: MainStatInterface[]): void{
        const builder: CharacterBuilder = new CharacterBuilder().fromCharacter(this.character);
        this.character = builder.mainStats(mainStats).build();
    }

    public setSubStats(mainstatEnum: MainStatEnum, subStats: SubStatInterface[]): void{
        const builder: CharacterBuilder = new CharacterBuilder().fromCharacter(this.character);
        this.character = builder.subStats(mainstatEnum, subStats).build();
    }

    public getCharacter(): Character{
        return this.character;
    }

    private recalculateSavingThrows(): void {
        this.character.getSavingThrows().forEach(savingThrow => {
            const correspondingMS: MainStatInterface =
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
