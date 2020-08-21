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

beforeEach(() => {
    jasmine.addMatchers(ArrayCustomMatchers);
});

it('MainStatFactory.buildMainStat.Strength', () => {
    const factory = MainStatFactory.getInstance();
    const baseValue = 12;
    const strength: MainStatInterface = factory.buildMainStat(MainStatEnum.STRENGTH, baseValue);
    const athletics: SubStatInterface = new SubStat(1, 'Athletics');
    expect(strength.getName()).toBe('Strength');
    expect(strength.getAbbreviation()).toBe('STR');
    expect(strength.getSubstatModifier()).toBe(1);
    expect(strength.getValue()).toBe(12);
    expect(strength.getSubstats().length).toBe(1);
    expect(strength.getSubstats()).toContainSubStat(athletics);
});
