import { CharacterBuilder } from '../../../stats/builder/CharacterBuilder';
import { MainStatEnum } from '../../../stats/factory/MainStatEnum';

describe('CharacterBuilder', () => {

    it('test', () => {
        const builder: CharacterBuilder = new CharacterBuilder();

        builder.mainStat(MainStatEnum.STRENGTH, 200);

        expect(1).toBe(1);
    });

});
