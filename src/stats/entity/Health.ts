export class Health  {

    public currentHitpoints: number;
    public temporaryHitpoints: number;
    public maxHitpoints: number;

    public constructor(maxHitpoints?: number) {
        this.maxHitpoints = maxHitpoints === null || maxHitpoints === undefined ? 20 : maxHitpoints;
        this.temporaryHitpoints = 0;
        this.currentHitpoints = this.maxHitpoints;
    }

    public fromHealth(other: Health): Health{
        this.currentHitpoints = other.currentHitpoints;
        this.temporaryHitpoints = other.temporaryHitpoints;
        this.maxHitpoints = other.maxHitpoints;
        return this;
    }

    takeDamage(damageTaken: number): void {
        this.temporaryHitpoints -= damageTaken;
        if ( this.temporaryHitpoints < 0 ){
            this.currentHitpoints -= this.temporaryHitpoints * -1;
            this.temporaryHitpoints = 0;
        }
        if ( this.currentHitpoints <= 0 ){
            this.currentHitpoints = 0;
        }
    }
    healDamage(healTaken: number): void {
        this.currentHitpoints += healTaken;
        if ( this.currentHitpoints > this.maxHitpoints ){
            this.currentHitpoints = this.maxHitpoints;
        }
    }

    public getCurrentHitpoints(): number {
        return this.currentHitpoints;
    }

    public getTemporaryHitpoints(): number {
        return this.temporaryHitpoints;
    }

    public getMaxHitpoints(): number {
        return this.maxHitpoints;
    }

    public setCurrentHitpoints(value: number): void {
        this.currentHitpoints = value;
    }

    public setTemporaryHitpoints(value: number): void {
        this.temporaryHitpoints = value;
    }

    public setMaxHitpoints(value: number): void {
        this.maxHitpoints = value;
    }
}
