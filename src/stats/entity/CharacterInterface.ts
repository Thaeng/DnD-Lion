import { MainStatInterface } from '../entity/MainStatInterface';
import { HealthInterface } from './HealthInterface';
import { SavingThrowsInterface } from './SavingThrowsInterface';

export interface CharacterInterface {

    getProficiencyBonus(): number;
    getArmorClass(): number;
    getLevel(): number;
    getExperience(): number;
    getInspiration(): number;
    getPassiveWisdom(): number;

    getCharacterName(): string;
    getPlayerName(): string;
    getCharacterClass(): string;
    getCharacterBackground(): string;
    getRace(): string;
    getAlignment(): string;

    getMainstats(): MainStatInterface[];
    getHealth(): HealthInterface[];
    getSavingThrows(): SavingThrowsInterface[];
}
