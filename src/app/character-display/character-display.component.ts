import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../../stats/entity/CharacterInterface';
import { CharacterProvider } from '../provider/CharacterProvider';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {

  character: CharacterInterface;

  constructor() {
    this.character = CharacterProvider.newCharacter().getCharacter();
   }

  ngOnInit(): void {
  }

}
