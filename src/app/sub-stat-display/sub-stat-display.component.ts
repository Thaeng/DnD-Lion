import { Component, OnInit, Input } from '@angular/core';
import { SubStat } from '../../stats/entity/SubStat';
import { CharacterProvider } from '../provider/CharacterProvider';
import { SubStatEnum } from 'src/stats/factory/SubStatEnum';

@Component({
  selector: 'app-sub-stat-display',
  templateUrl: './sub-stat-display.component.html',
  styleUrls: ['./sub-stat-display.component.css']
})
export class SubStatDisplayComponent implements OnInit {

  @Input() substats: SubStat[];

  constructor() { }

  ngOnInit(): void {

  }

  changeProficiency(substat: SubStat): void {
    const substatName = substat.getName().toUpperCase().replace(/\s/g, '_');
    const substatEnum: SubStatEnum = SubStatEnum[substatName as keyof typeof SubStatEnum];
    const proficient: boolean = !substat.isProficient();
    CharacterProvider.getInstance().updateSubstat(substatEnum, proficient);
  }

}
