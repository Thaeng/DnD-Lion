import { Component, OnInit, Input } from '@angular/core';
import { SubStatInterface } from '../../stats/entity/SubstatInterface';
import { CharacterProvider } from '../provider/CharacterProvider';
import { SubStatEnum } from 'src/stats/factory/SubStatEnum';

@Component({
  selector: 'app-sub-stat-display',
  templateUrl: './sub-stat-display.component.html',
  styleUrls: ['./sub-stat-display.component.css']
})
export class SubStatDisplayComponent implements OnInit {

  @Input() substats: SubStatInterface[];

  constructor() { }

  ngOnInit(): void {

  }

  changeProficiency(substat: SubStatInterface): void {
    const substatEnum: SubStatEnum = SubStatEnum[substat.getName().toUpperCase() as keyof typeof SubStatEnum];
    const proficient: boolean = !substat.isProficient();
    CharacterProvider.getInstance().updateSubstat(substatEnum, proficient);
  }

}
