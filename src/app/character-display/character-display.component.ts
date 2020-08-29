import { Component, OnInit } from '@angular/core';
import { Character } from '../../stats/entity/Character';
import { CharacterProvider } from '../provider/CharacterProvider';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {

  character: Character;

  constructor() {
    this.character = CharacterProvider.newCharacter().getCharacter();
   }

  ngOnInit(): void {
  }

  proficiencyChanged(): void {
    CharacterProvider.getInstance().proficiencyChanged();
  }

}
