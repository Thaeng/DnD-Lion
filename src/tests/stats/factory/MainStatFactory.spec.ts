import { MainStatFactory } from '../../../stats/factory/MainStatFactory';
import { MainStatEnum } from '../../../stats/factory/MainStatEnum';
import { MainStatInterface } from '../../../stats/entity/MainStatInterface';
import { SubStat } from '../../../stats/entity/SubStat';
import { SubStatInterface } from '../../../stats/entity/SubstatInterface';
import { ArrayCustomMatchers } from '../../test-helpers';

declare global {
    namespace jasmine {
        interface Matchers<T> {
            toContainSubStat(expected: SubStatInterface, expectationFailOutput?: any): boolean;
        }
    }
}

describe('MainStatFactory', () => {
    beforeEach(() => {
        jasmine.addMatchers(ArrayCustomMatchers);
    });

    it('should build Mainstat Strength with SubStat/s', () => {
        const factory = MainStatFactory.getInstance();
        const baseValue = 12;
        const strength: MainStatInterface = factory.buildMainStat(MainStatEnum.STRENGTH, baseValue);
        const athletics: SubStatInterface = new SubStat(1, 'Athletics', false);

        expect(strength.getName()).toBe('Strength');
        expect(strength.getAbbreviation()).toBe('STR');
        expect(strength.getSubstatModifier()).toBe(1);
        expect(strength.getValue()).toBe(12);
        expect(strength.getSubstats().length).toBe(1);
        expect(strength.getSubstats()).toContainSubStat(athletics);
    });

    it('should build Mainstat Dexterity with SubStat/s', () => {
        const factory = MainStatFactory.getInstance();
        const baseValue = 15;
        const strength: MainStatInterface = factory.buildMainStat(MainStatEnum.DEXTERITY, baseValue);
        const acrobatics: SubStatInterface = new SubStat(2, 'Acrobatics', false);
        const sleightOfHand: SubStatInterface = new SubStat(2, 'Sleight of Hand', false);
        const stealth: SubStatInterface = new SubStat(2, 'Stealth', false);

        expect(strength.getName()).toBe('Dexterity');
        expect(strength.getAbbreviation()).toBe('DEX');
        expect(strength.getSubstatModifier()).toBe(2);
        expect(strength.getValue()).toBe(15);
        expect(strength.getSubstats().length).toBe(3);
        expect(strength.getSubstats()).toContainSubStat(acrobatics);
        expect(strength.getSubstats()).toContainSubStat(sleightOfHand);
        expect(strength.getSubstats()).toContainSubStat(stealth);
    });

    it('should build Mainstat Constitution with SubStat/s', () => {
        const factory = MainStatFactory.getInstance();
        const baseValue = 15;
        const strength: MainStatInterface = factory.buildMainStat(MainStatEnum.CONSTITUTION, baseValue);

        expect(strength.getName()).toBe('Constitution');
        expect(strength.getAbbreviation()).toBe('CON');
        expect(strength.getSubstatModifier()).toBe(2);
        expect(strength.getValue()).toBe(15);
        expect(strength.getSubstats().length).toBe(0);
    });

    it('should build Mainstat Intelligence with SubStat/s', () => {
        const factory = MainStatFactory.getInstance();
        const baseValue = 17;
        const strength: MainStatInterface = factory.buildMainStat(MainStatEnum.INTELLIGENCE, baseValue);
        const arcana: SubStatInterface = new SubStat(3, 'Arcana', false);
        const history: SubStatInterface = new SubStat(3, 'History', false);
        const investigation: SubStatInterface = new SubStat(3, 'Investigation', false);
        const nature: SubStatInterface = new SubStat(3, 'Nature', false);
        const religion: SubStatInterface = new SubStat(3, 'Religion', false);

        expect(strength.getName()).toBe('Intelligence');
        expect(strength.getAbbreviation()).toBe('INT');
        expect(strength.getSubstatModifier()).toBe(3);
        expect(strength.getValue()).toBe(17);
        expect(strength.getSubstats().length).toBe(5);
        expect(strength.getSubstats()).toContainSubStat(arcana);
        expect(strength.getSubstats()).toContainSubStat(history);
        expect(strength.getSubstats()).toContainSubStat(investigation);
        expect(strength.getSubstats()).toContainSubStat(nature);
        expect(strength.getSubstats()).toContainSubStat(religion);
    });

    it('should build Mainstat Wisdom with SubStat/s', () => {
        const factory = MainStatFactory.getInstance();
        const baseValue = 8;
        const strength: MainStatInterface = factory.buildMainStat(MainStatEnum.WISDOM, baseValue);
        const animalHandling: SubStatInterface = new SubStat(-1, 'Animal Handling', false);
        const insight: SubStatInterface = new SubStat(-1, 'Insight', false);
        const medicine: SubStatInterface = new SubStat(-1, 'Medicine', false);
        const perception: SubStatInterface = new SubStat(-1, 'Perception', false);
        const survival: SubStatInterface = new SubStat(-1, 'Survival', false);

        expect(strength.getName()).toBe('Wisdom');
        expect(strength.getAbbreviation()).toBe('WIS');
        expect(strength.getSubstatModifier()).toBe(-1);
        expect(strength.getValue()).toBe(8);
        expect(strength.getSubstats().length).toBe(5);
        expect(strength.getSubstats()).toContainSubStat(animalHandling);
        expect(strength.getSubstats()).toContainSubStat(insight);
        expect(strength.getSubstats()).toContainSubStat(medicine);
        expect(strength.getSubstats()).toContainSubStat(perception);
        expect(strength.getSubstats()).toContainSubStat(survival);
    });

    it('should build Mainstat Charisma with SubStat/s', () => {
        const factory = MainStatFactory.getInstance();
        const baseValue = 20;
        const strength: MainStatInterface = factory.buildMainStat(MainStatEnum.CHARISMA, baseValue);
        const deception: SubStatInterface = new SubStat(5, 'Deception', false);
        const intimidation: SubStatInterface = new SubStat(5, 'Intimidation', false);
        const performance: SubStatInterface = new SubStat(5, 'Performance', false);
        const persuasion: SubStatInterface = new SubStat(5, 'Persuasion', false);

        expect(strength.getName()).toBe('Charisma');
        expect(strength.getAbbreviation()).toBe('CHA');
        expect(strength.getSubstatModifier()).toBe(5);
        expect(strength.getValue()).toBe(20);
        expect(strength.getSubstats().length).toBe(4);
        expect(strength.getSubstats()).toContainSubStat(deception);
        expect(strength.getSubstats()).toContainSubStat(intimidation);
        expect(strength.getSubstats()).toContainSubStat(performance);
        expect(strength.getSubstats()).toContainSubStat(persuasion);
    });
});
