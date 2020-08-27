import { CharacterProvider } from 'src/app/provider/CharacterProvider';
import { Character } from 'src/stats/entity/Character';

describe ('CharacterProviderTest', () => {

    it('test', () => {
        const provider: CharacterProvider = CharacterProvider.newCharacter();

        const character: Character = provider.getCharacter();
    });

});