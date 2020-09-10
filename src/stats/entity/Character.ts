import { MainStat } from './MainStat';
import { Health } from './Health';
import { SavingThrow } from './SavingThrow';
import { SubStat } from './SubStat';
import { Item } from './Item';
import { SpellInventory } from './SpellInventory';
import { CharacterInfo } from './CharacterInfo';


export class Character {

    proficiencyBonus: number;
    armorClass: number;
    level: number;
    experience: number;
    inspiration: number;
    passiveWisdom: number;
    speed: number;

    characterName: string;
    playerName: string;
    characterClass: string;
    characterBackground: string;
    race: string;
    alignment: string;
    mainstats: MainStat[];
    health: Health;
    savingThrows: SavingThrow[];
    inventory: Item[];
    spellInventory: SpellInventory;
    characterInfo: CharacterInfo;

    appereance: string;

    public fromCharacter(other: Character): Character {
        this.proficiencyBonus = other.proficiencyBonus;
        this.armorClass = other.armorClass;
        this.level = other.level;
        this.experience = other.experience;
        this.inspiration = other.inspiration;
        this.passiveWisdom = other.passiveWisdom;
        this.speed = other.speed;

        this.characterName = other.characterName;
        this.playerName = other.playerName;
        this.characterClass = other.characterClass;
        this.characterBackground = other.characterBackground;
        this.race = other.race;
        this.alignment = other.alignment;

        this.appereance = other.appereance;

        this.health = this.health.fromHealth(other.health);
        this.spellInventory = this.spellInventory.fromSpellInventory(other.spellInventory);
        this.characterInfo = this.characterInfo.fromCharacterInfo(other.characterInfo);

        this.transferMainstats(other);
        this.transferSubStats(other);
        this.transferInventory(other);

        return this;
    }

    private transferMainstats(other: Character): void {
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
    }

    private transferSubStats(other: Character): void {
        this.savingThrows.forEach(savingThrow => {
            savingThrow =
                savingThrow.fromSavingThrows(
                    other.savingThrows.find(
                            otherSavingThrow => (savingThrow as SavingThrow).name === (otherSavingThrow as SavingThrow).name
                    )
                );
            }
        );
    }

    private transferInventory(other: Character): void {
        this.inventory.splice(0, this.inventory.length);
        other.inventory.forEach(item => this.inventory.push(item));
    }

    takeDamage(damageTaken: number): void {
        this.health.takeDamage(damageTaken);
    }
    healDamage(healTaken: number): void {
        this.health.healDamage(healTaken);
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

    public getMainstats(): MainStat[] {
        return this.mainstats;
    }

    public getHealth(): Health {
        return this.health;
    }

    public getSavingThrows(): SavingThrow[] {
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


    public setMainstats(value: MainStat[]): void {
        this.mainstats = value;
    }


    public setHealth(value: Health): void {
        this.health = value;
    }

    public setSavingThrows(value: SavingThrow[]): void {
        this.savingThrows = value;
    }

    public getSpeed(): number{
        return this.speed;
    }
}
