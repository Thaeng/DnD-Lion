import { Component, OnInit } from '@angular/core';
import { MainStatInterface} from '../../stats/entity/MainStatInterface';
import { CharacterProvider} from '../provider/CharacterProvider';
import { MainStatEnum } from 'src/stats/factory/MainStatEnum';

@Component({
  selector: 'app-main-stat-display',
  templateUrl: './main-stat-display.component.html',
  styleUrls: ['./main-stat-display.component.css']
})
export class MainStatDisplayComponent implements OnInit {

  mainstats: MainStatInterface[];
  timeoutHandler: number;

  constructor() { }

  ngOnInit(): void {
    this.mainstats = CharacterProvider.getInstance().getCharacter().getMainstats();
  }

  changeMainstat(mainstatInterface: MainStatInterface, value: number): void{
    const mainstatEnum: MainStatEnum = MainStatEnum[mainstatInterface.getName().toUpperCase() as keyof typeof MainStatEnum];
    const newValue = mainstatInterface.getValue() + value;
    CharacterProvider.getInstance().updateMainstat(mainstatEnum, newValue);
  }

  public mouseup(): void {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedown(mainstatInterface: MainStatInterface, value: number): void {
    this.timeoutHandler = setInterval(() => {
      this.changeMainstat(mainstatInterface, value);
    }, 150);
  }
}
