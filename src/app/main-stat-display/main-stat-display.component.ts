import { Component, OnInit } from '@angular/core';
import { MainStatInterface} from '../../stats/entity/MainStatInterface';
import { MainStatProvider} from '../provider/MainStatProvider';


@Component({
  selector: 'app-main-stat-display',
  templateUrl: './main-stat-display.component.html',
  styleUrls: ['./main-stat-display.component.css']
})
export class MainStatDisplayComponent implements OnInit {

  mainstats: MainStatInterface[];

  constructor() { }

  ngOnInit(): void {
    this.mainstats = MainStatProvider.getInstance().get();
  }

}
