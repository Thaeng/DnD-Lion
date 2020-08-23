import MatchersUtil = jasmine.MatchersUtil;
import CustomMatcherFactories = jasmine.CustomMatcherFactories;
import CustomEqualityTester = jasmine.CustomEqualityTester;
import CustomMatcher = jasmine.CustomMatcher;
import CustomMatcherResult = jasmine.CustomMatcherResult;
import { SubStatInterface } from 'src/stats/entity/SubstatInterface';

const pass = {
    pass: true,
    message: `test is passed`
};

const fail = {
    pass: false,
    message: `test is failed`
};

export const ArrayCustomMatchers: CustomMatcherFactories = {
    toContainSubStat: (util: MatchersUtil, customEqualityTester: CustomEqualityTester[]): CustomMatcher => {
        return {
            compare: (actual: SubStatInterface[], expected: SubStatInterface): CustomMatcherResult => {
                if (actual.find(substat => substat.isEquals(expected))) {
                    return pass;
                }else {
                    return {
                        pass: false,
                        message: `expected: ${expected.getName()}`
                    };
                }
            }
        };
    }
};
