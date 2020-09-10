import { SpellLevel } from './SpellLevel';

export class SpellInventory {

    public cantrips: string[] = [];
    public spellLevels: SpellLevel[] = [];
    public spellCastingClass: string = 'None';
    public spellCastingAbility: string = 'None';
    public spellSaveDC: number = 0;
    public spellAttackBonus: number = 0;

    constructor(){
        this.initSpellLevels();
    }

    public fromSpellInventory(other: SpellInventory): SpellInventory{
        this.cantrips.length = 0;
        other.cantrips.forEach(cantrip => this.cantrips.push(cantrip));

        this.spellLevels.forEach(spellLevel => spellLevel = spellLevel.fromSpellLevel(
            other.spellLevels.find(otherSpellLevel => otherSpellLevel.level === spellLevel.level)
        ));

        this.spellCastingClass = other. spellCastingClass;
        this.spellCastingAbility = other.spellCastingAbility;
        this.spellSaveDC = other.spellSaveDC;
        this.spellAttackBonus = other.spellAttackBonus;

        return this;
    }

    private initSpellLevels(): void {
        for (let i = 1; i <= 9; i++){
            const spellLevel: SpellLevel = new SpellLevel(i, 0, 0);
            this.spellLevels.push(spellLevel);
        }
    }

}
