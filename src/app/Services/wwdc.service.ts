import {Injectable} from "@angular/core";
import {mod} from "../Model/mod";
import {modEffect} from "../Model/modEffect";
import {weapon} from "../Model/weapon";

@Injectable()
export class WWDCService {

  /** Mod Variables **/
  modCount: number = 8;
  mods: mod[] = [];
  modTypes: string[] = [
    'DamageBonus',
    'FireDamage',
    'LightningDamage',
    'IceDamage',
    'PunctureDamage',
    'ToxinDamage',
    'ImpactDamage',
    'SlashDamage',
    'MiscDamage',
    'Multishot',
    'FireRate',
    'ReloadSpeed',
    'MagCap',
    'AmmoCap',
    'CorpusDamage',
    'GrineerDamage',
    'InfestedDamage',
    'CritChance',
    'CritMultiplier',
    'StatusChance',
    'StatusDuration',
    'FirstShotDamage',
    'Zoom',
    'ObjectPierce',
    'AmmoMutator',
    'AccuracyBonus',
    'RecoilBonus',
    'SpreadBonus',
    'Silence',
    'FlatDamageBonus',
    'DeadAim',
    'FlatStatusBonus',
    'FlatMagBonus'];

  /** Weapon Variables **/
  weapon: weapon;
  damageTypes: string[] = [
    'Physical',
    'Impact',
    'Puncture',
    'Slash',
    'Fire',
    'Ice',
    'Electric',
    'Toxin',
    'Blast',
    'Magnetic',
    'Gas',
    'Radiation',
    'Corrosive',
    'Viral'];
  weaponModes: string[] = [
    'Burst',
    'Charge',
    'Continuous',
    'Full-Auto',
    'Full-Auto (Ramp-up)',
    'Full-Auto (Bullet-Ramp)',
    'Semi-Auto'];

  constructor(){

    //Initialize the mods
    for(var _i = 0; _i < this.modCount; _i++){

      var modTitle: string = 'Mod ' + _i;
      var modName: string = '';
      var effects: modEffect[] = [new modEffect('None', null),
                                  new modEffect('None', null),
                                  new modEffect('None', null),
                                  new modEffect('None', null)];

      this.mods[_i] = new mod(modTitle, modName, effects)
    }

    //Initialize the weapon
    this.weapon = new weapon();
  }
}
