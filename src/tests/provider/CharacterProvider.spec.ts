import { CharacterProvider } from 'src/app/provider/CharacterProvicer';
import { Character } from 'src/stats/entity/Character';

describe ('CharacterProviderTest', () => {

    it('test', () => {
        const provider: CharacterProvider = CharacterProvider.newCharacter();

        const character: Character = provider.getCharacter();
    });

});