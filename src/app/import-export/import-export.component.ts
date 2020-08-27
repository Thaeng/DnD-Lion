import { Component, OnInit } from '@angular/core';
import { CharacterProvider } from '../provider/CharacterProvider';
import { Character } from 'src/stats/entity/Character';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {

  json: string;

  constructor() { }

  ngOnInit(): void {
  }

  doExport(): void{
    this.json = JSON.stringify(CharacterProvider.getInstance().getCharacter(), null, 2);
  }

  doImport(): void {

    CharacterProvider.fromCharacter(this.loadCharacterWithoutLoosingDatabinding());
  }

  loadCharacterWithoutLoosingDatabinding(): Character {

    const currentCharacter: Character = CharacterProvider.getInstance().getCharacter();
    const newCharacter: Character = JSON.parse(this.json);

    return currentCharacter.fromCharacter(newCharacter) as Character;
  }
}
