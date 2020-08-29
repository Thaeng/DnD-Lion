export class Item {

    name: string;
    description: string;
    statModifier: string;

    constructor(name?: string, description?: string, statModifier?: string) {
        this.name = name;
        this.description = description;
        this.statModifier = statModifier;
    }

    public equals(other: Item): boolean {
        return this.name === other.name && this.description === other.description && this.statModifier === other.statModifier;
    }
}
