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

  enableInput(event: KeyboardEvent): void {
    (event.target as HTMLElement).setAttribute('disabled', 'false');
    console.log(event.target);
  }

  disableInput(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      console.log('disabled');
    }
  }

}
