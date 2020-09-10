import { Component, OnInit } from '@angular/core';
import { CharacterInfo } from 'src/stats/entity/CharacterInfo';
import { CharacterProvider } from '../provider/CharacterProvider';

@Component({
  selector: 'app-character-info-display',
  templateUrl: './character-info-display.component.html',
  styleUrls: ['./character-info-display.component.css']
})
export class CharacterInfoDisplayComponent implements OnInit {

  characterInfo: CharacterInfo;

  constructor() { }

  ngOnInit(): void {
    this.characterInfo = CharacterProvider.getInstance().getCharacter().characterInfo;
  }

}
