import { Component, OnInit } from '@angular/core';
import { CharacterProvider } from '../provider/CharacterProvider';
import { SavingThrowInterface } from 'src/stats/entity/SavingThrowInterface';
import { SavingThrow } from 'src/stats/entity/SavingThrow';

@Component({
  selector: 'app-savingthrows-display',
  templateUrl: './savingthrows-display.component.html',
  styleUrls: ['./savingthrows-display.component.css']
})
export class SavingthrowsDisplayComponent implements OnInit {

  savingThrows: SavingThrowInterface[];

  constructor() { }

  ngOnInit(): void {
    this.savingThrows = CharacterProvider.getInstance().getCharacter().getSavingThrows();
  }

  changeProficiency(savingThrow: SavingThrow): void {
    CharacterProvider.getInstance().updateSavingThrow(savingThrow, !savingThrow.isProficient());
  }
}
