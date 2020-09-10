export class CharacterInfo {

    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;

    otherProficienciesAndLanguages: string;

    featuresAndTraits: string;
    age: number;
    height: number;
    weight: string;
    eyes: string;
    skin: string;
    hair: string;

    alliesAndOrganizations: string;
    characterBackStory: string;
    treasure: string;

    constructor(){}

    public fromCharacterInfo(other: CharacterInfo): CharacterInfo{
        this.personalityTraits = other.personalityTraits;
        this.ideals = other.ideals;
        this.bonds = other.bonds;
        this.flaws = other.flaws;

        this.otherProficienciesAndLanguages = other.otherProficienciesAndLanguages;

        this.featuresAndTraits = other.featuresAndTraits;
        this.age = other.age;
        this.height = other.height;
        this.weight = other.weight;
        this.eyes = other.eyes;
        this.skin = other.skin;
        this.hair = other.hair;

        this.alliesAndOrganizations = other.alliesAndOrganizations;
        this.characterBackStory = other.characterBackStory;
        this.treasure = other.treasure;
        return this;
    }

}
