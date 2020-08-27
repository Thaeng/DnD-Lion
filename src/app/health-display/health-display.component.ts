import { Component, OnInit } from '@angular/core';
import { HealthInterface } from 'src/stats/entity/HealthInterface';
import { CharacterProvider } from '../provider/CharacterProvider';

@Component({
  selector: 'app-health-display',
  templateUrl: './health-display.component.html',
  styleUrls: ['./health-display.component.css']
})
export class HealthDisplayComponent implements OnInit {

  health: HealthInterface;
  damageTaken = 0;
  healing = 0;

  constructor() { }

  ngOnInit(): void {
    this.health = CharacterProvider.getInstance().getCharacter().getHealth();
  }

  takeDamage(): void {
    this.health.takeDamage(this.damageTaken);
  }

  heal(): void {
    this.health.healDamage(this.healing);
  }
}
