import { MainStatInterface } from '../entity/MainStatInterface';
import { HealthInterface } from './HealthInterface';
import { SavingThrowInterface } from './SavingThrowInterface';

export interface CharacterInterface {

    getProficiencyBonus(): number;
    getArmorClass(): number;
    getLevel(): number;
    getExperience(): number;
    getInspiration(): number;
    getPassiveWisdom(): number;
    getSpeed(): number;

    getCharacterName(): string;
    getPlayerName(): string;
    getCharacterClass(): string;
    getCharacterBackground(): string;
    getRace(): string;
    getAlignment(): string;

    getMainstats(): MainStatInterface[];
    getHealth(): HealthInterface;
    getSavingThrows(): SavingThrowInterface[];

    takeDamage(damageTaken: number): void;
    healDamage(healTaken: number): void;
}
