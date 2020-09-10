export class SpellLevel {

    level: number;
    slotsTotal: number;
    slotsExpended: number;
    spells: string[];


    constructor(level: number, slotsTotal: number, slotsExpended: number, spells?: string[]) {
        this.level = level;
        this.slotsTotal = slotsTotal;
        this.slotsExpended = slotsExpended;
        this.spells = (spells === null || spells === undefined) ? [] : spells;
    }

    public fromSpellLevel(other: SpellLevel): SpellLevel {
        this.level = other.level;
        this.slotsTotal = other.slotsTotal;
        this.slotsExpended = other.slotsExpended;
        this.spells.length = 0;
        other.spells.forEach(spell => this.spells.push(spell));

        return this;
    }

}
