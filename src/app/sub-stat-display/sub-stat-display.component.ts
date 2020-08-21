import { Component, OnInit, Input } from '@angular/core';
import { SubStatInterface } from '../../stats/entity/SubstatInterface';

@Component({
  selector: 'app-sub-stat-display',
  templateUrl: './sub-stat-display.component.html',
  styleUrls: ['./sub-stat-display.component.css']
})
export class SubStatDisplayComponent implements OnInit {

  @Input() substats: SubStatInterface[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.substats);
  }

}
