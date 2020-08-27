import { Component, OnInit } from '@angular/core';
import { MainStat} from '../../stats/entity/MainStat';
import { CharacterProvider} from '../provider/CharacterProvider';
import { MainStatEnum } from 'src/stats/factory/MainStatEnum';

@Component({
  selector: 'app-main-stat-display',
  templateUrl: './main-stat-display.component.html',
  styleUrls: ['./main-stat-display.component.css']
})
export class MainStatDisplayComponent implements OnInit {

  mainstats: MainStat[];
  timeoutHandler: number;

  constructor() { }

  ngOnInit(): void {
    this.mainstats = CharacterProvider.getInstance().getCharacter().getMainstats();
  }

  changeMainstat(mainstat: MainStat, value: number): void{
    const mainstatEnum: MainStatEnum = MainStatEnum[mainstat.getName().toUpperCase() as keyof typeof MainStatEnum];
    const newValue = mainstat.getValue() + value;
    CharacterProvider.getInstance().updateMainstat(mainstatEnum, newValue);
  }

  public mouseup(): void {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedown(mainstat: MainStat, value: number): void {
    this.timeoutHandler = setInterval(() => {
      this.changeMainstat(mainstat, value);
    }, 150);
  }
}
