import { Component, OnInit } from '@angular/core';
import { Character } from '../../stats/entity/Character';
import { CharacterProvider } from '../provider/CharacterProvider';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {

  character: Character;

  constructor(private sanitizer: DomSanitizer) {
    this.character = CharacterProvider.newCharacter().getCharacter();
   }

  ngOnInit(): void {
  }

  proficiencyChanged(): void {
    CharacterProvider.getInstance().proficiencyChanged();
  }

  onFileChanged(event: any): void {
    const selectedFile: File = event.target.files[0];

    const reader = new FileReader();
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(selectedFile);
  }

  handleReaderLoaded(readerEvt: any): void {
    const binaryString = readerEvt.target.result;
    this.character.appereance = btoa(binaryString);
   }
}
