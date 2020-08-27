export interface HealthInterface {

    getCurrentHitpoints(): number;
    getMaxHitpoints(): number;
    getTemporaryHitpoints(): number;

    setMaxHitpoints(maxHitpoints: number): void;
    setTemporaryHitpoints(temporaryHitpoints: number): void;
    setCurrentHitpoints(currentHitpoints: number): void;

    takeDamage(damageTaken: number): void;
    healDamage(healTaken: number): void;

    fromHealth(health: HealthInterface): HealthInterface;
}
