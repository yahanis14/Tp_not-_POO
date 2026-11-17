import type { Weapon } from "./Weapon";

export abstract class Character
{
    public name: string;
    public maxHealth: number;
    public baseAttack: number;
    public baseDefense: number;
    private _health: number;
    private _weapon: Weapon | null;

    public constructor(name: string, health: number, baseAttack: number, baseDefense: number, _health: number, _weapon: Weapon)
    {
        if (health <= 0) 
        {
            throw new Error(`The health of ${name} must be strictly positive.`);
        }

        this.name = name;
        this.maxHealth = health;
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
        this._health = health;
        this._weapon = null;
    }

    public get health(): number
    {
        return this._health;
    }

    public abstract getAttack(): number
    
    public canEquip(weapon: Weapon): boolean

    public readonly getWeaponAttackBonus(): number
    {
        if(this._weapon != null);
    }

    public isAlive(): boolean
    {
        if(this._health <= 0)
        {
            return true;
        }
    }

    public describe(): string
    {
        return`${this.name}, ${this._health} / ${this.maxHealth}, ${this.baseAttack}, ${this.baseDefense}, ${this._weapon}`;
    }
}
