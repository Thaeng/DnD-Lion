import { CharacterInterface } from './CharacterInterface';
import { MainStatInterface } from './MainStatInterface';
import { HealthInterface } from './HealthInterface';
import { SavingThrowsInterface } from './SavingThrowsInterface';
import { SubStatModifierCalculator } from '../factory/SubStatModifierCalculator';
import { MainStat } from './MainStat';
import { SubStat } from './SubStat';

export class Character implements CharacterInterface {

    proficiencyBonus: number;
    armorClass: number;
    level: number;
    experience: number;
    inspiration: number;
    passiveWisdom: number;

    characterName: string;
    playerName: string;
    characterClass: string;
    characterBackground: string;
    race: string;
    alignment: string;
    mainstats: MainStatInterface[];
    health: HealthInterface[];
    savingThrows: SavingThrowsInterface[];

    public constructor(){}

    public fromCharacter(other: Character): CharacterInterface {
        this.proficiencyBonus = other.proficiencyBonus;
        this.armorClass = other.armorClass;
        this.level = other.level;
        this.experience = other.experience;
        this.inspiration = other.inspiration;
        this.passiveWisdom = other.passiveWisdom;

        this.characterName = other.characterName;
        this.playerName = other.playerName;
        this.characterClass = other.characterClass;
        this.characterBackground = other.characterBackground;
        this.race = other.race;
        this.alignment = other.alignment;

        this.mainstats.forEach(mainstat => {
            const newMainstat: MainStat = other.mainstats.find(m => (m as MainStat).name === (mainstat as MainStat).name) as MainStat;
            const newSubstats: SubStat[] = newMainstat.subStats as SubStat[];

            mainstat.setValue(newMainstat.value);
            mainstat.setSubstatModifier(newMainstat.substatModifier);

            mainstat.getSubstats().forEach(substat => {
              const newSubstat: SubStat = newSubstats.find(s => s.name === substat.getName());

              substat.setProficient(newSubstat.proficient);
              substat.setValue(newSubstat.value);
            });
          });

        this.health = other.health;
        this.savingThrows = other.savingThrows;

        return this;
    }

    public getProficiencyBonus(): number {
        return this.proficiencyBonus;
    }

    public getArmorClass(): number {
        return this.armorClass;
    }

    public getLevel(): number {
        return this.level;
    }

    public getExperience(): number {
        return this.experience;
    }

    public getInspiration(): number {
        return this.inspiration;
    }

    public getPassiveWisdom(): number {
        return this.passiveWisdom;
    }

    public getCharacterName(): string {
        return this.characterName;
    }

    public getPlayerName(): string {
        return this.playerName;
    }

    public getCharacterClass(): string {
        return this.characterClass;
    }

    public getCharacterBackground(): string {
        return this.characterBackground;
    }

    public getRace(): string {
        return this.race;
    }

    public getAlignment(): string {
        return this.alignment;
    }

    public getMainstats(): MainStatInterface[] {
        return this.mainstats;
    }

    public getHealth(): HealthInterface[] {
        return this.health;
    }

    public getSavingThrows(): SavingThrowsInterface[] {
        return this.savingThrows;
    }

    public setProficiencyBonus(value: number): void {
        this.proficiencyBonus = value;
    }

    public setArmorClass(value: number): void {
        this.armorClass = value;
    }

    public setLevel(value: number): void {
        this.level = value;
    }

    public setExperience(value: number): void {
        this.experience = value;
    }

    public setInspiration(value: number): void {
        this.inspiration = value;
    }

    public setPassiveWisdom(value: number): void {
        this.passiveWisdom = value;
    }

    public setCharacterName(value: string): void {
        this.characterName = value;
    }

    public setPlayerName(value: string): void {
        this.playerName = value;
    }

    public setCharacterClass(value: string): void {
        this.characterClass = value;
    }

    public setCharacterBackground(value: string): void {
        this.characterBackground = value;
    }

    public setRace(value: string): void {
        this.race = value;
    }


    public setAlignment(value: string): void {
        this.alignment = value;
    }


    public setMainstats(value: MainStatInterface[]): void {
        this.mainstats = value;
    }


    public setHealth(value: HealthInterface[]): void {
        this.health = value;
    }

    public setSavingThrows(value: SavingThrowsInterface[]): void {
        this.savingThrows = value;
    }
}
