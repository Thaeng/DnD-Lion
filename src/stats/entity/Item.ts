export class Item {

    name: string;
    desciption: string;
    statModifier: string;

    constructor(name?: string, description?: string, statModifier?: string) {
        this.name = name;
        this.desciption = description;
        this.statModifier = statModifier;
    }

    public equals(other: Item): boolean {
        return this.name === other.name && this.desciption === other.desciption && this.statModifier === other.statModifier
    }
}
