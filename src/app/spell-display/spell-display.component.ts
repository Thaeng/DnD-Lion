import { Component, OnInit } from '@angular/core';
import { SpellInventory } from 'src/stats/entity/SpellInventory';
import { CharacterProvider } from '../provider/CharacterProvider';
import { SpellLevel } from 'src/stats/entity/SpellLevel';
import {MatDialog} from '@angular/material/dialog';
import { SpellDialogComponent } from '../spell-dialog/spell-dialog.component';

@Component({
  selector: 'app-spell-display',
  templateUrl: './spell-display.component.html',
  styleUrls: ['./spell-display.component.css']
})
export class SpellDisplayComponent implements OnInit {

  spellInventory: SpellInventory;
  isDialogUp = false;
  selectedSpellCastingAbility: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.spellInventory = CharacterProvider.getInstance().getCharacter().spellInventory;
    this.selectedSpellCastingAbility = 'CHA';
    this.spellCastingAbilityChanged();
  }

  spellCastingAbilityChanged(): void {
    CharacterProvider.getInstance().recalculatingSpellRelatedStats();
  }

  addSpell(level: number): void {
    this.openDialog('', result => {
      if (this.isValidSpell(result)) {
        this.spellInventory.spellLevels[level - 1].spells.push(result as string);
      }
    });
  }

  removeSpell(spell: string, level: number): void {
    const spellLevel: SpellLevel = this.spellInventory.spellLevels[level - 1];
    const spellIndex = spellLevel.spells.indexOf(spell);

    if (spellIndex > -1) {
      spellLevel.spells.splice(spellIndex, 1);
    }
  }

  editSpell(spell: string, level: number): void {
    const oldSpell: string = spell;
    this.openDialog(spell, result => {
      if (this.isValidSpell(result)) {
        const spellLevel: SpellLevel = this.spellInventory.spellLevels[level - 1];
        const spellIndex = spellLevel.spells.indexOf(oldSpell);

        if (spellIndex > -1) {
          spellLevel.spells.splice(spellIndex, 1, result as string);
        }
      }
    });
  }

  addCantrip(cantrip: string): void{
    this.openDialog('', result => {
      if (this.isValidSpell(result)) {
        this.spellInventory.cantrips.push(result as string);
      }
    });
  }

  removeCantrip(cantrip: string): void {
    const cantripIndex = this.spellInventory.cantrips.indexOf(cantrip);

    if (cantripIndex > -1) {
      this.spellInventory.cantrips.splice(cantripIndex, 1);
    }
  }

  editCantrip(cantrip: string): void {
    const oldCantrip: string = cantrip;
    this.openDialog(cantrip, result => {
      if (this.isValidSpell(result)) {
        const cantripIndex = this.spellInventory.cantrips.indexOf(oldCantrip);

        if (cantripIndex > -1) {
          this.spellInventory.cantrips.splice(cantripIndex, 1, result as string);
        }
      }
    });
  }

  private isValidSpell(spell: string): boolean {
    return !(spell === null || spell === undefined || spell.trim() === '');
  }

  private openDialog(stringData: string, callback: (value: any) => void): void {
    if (!this.isDialogUp){
      this.isDialogUp = true;
      const dialogRef = this.dialog.open(SpellDialogComponent, {
        height: '400px',
        width: '600px',
        data: stringData
      });
      dialogRef.afterClosed().subscribe(callback);
      dialogRef.afterClosed().subscribe(result => this.isDialogUp = false);
    }
  }
}
