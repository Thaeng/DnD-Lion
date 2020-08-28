import { Component, OnInit } from '@angular/core';
import { Item } from 'src/stats/entity/Item';
import { CharacterProvider } from '../provider/CharacterProvider';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  inventory: Item[];

  constructor() { }

  ngOnInit(): void {
    this.inventory = CharacterProvider.getInstance().getCharacter().inventory;
  }

  addItem(): void {
    CharacterProvider.getInstance().addItem(new Item('Item', 'My Item Desciption', 'Strength ' + Math.floor(Math.random() * 100) + ';Acrobatics ' + Math.floor(Math.random() * 100)));
  }

  removeItem(item: Item): void {
    CharacterProvider.getInstance().removeItem(item);
  }
}
