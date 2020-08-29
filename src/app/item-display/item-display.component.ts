import { Component, OnInit } from '@angular/core';
import { Item } from 'src/stats/entity/Item';
import { CharacterProvider } from '../provider/CharacterProvider';
import {MatDialog} from '@angular/material/dialog';
import { ItemDetailDisplayComponent } from '../item-detail-display/item-detail-display.component';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  inventory: Item[];

  animal: string;
  name: string;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.inventory = CharacterProvider.getInstance().getCharacter().inventory;
  }

  addItem(): void {
    const item: Item = new Item('', '', '');
    const dialogRef = this.dialog.open(ItemDetailDisplayComponent, {
      height: '400px',
      width: '600px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result !== null && result !== undefined && this.isValidItem(item)) {
        CharacterProvider.getInstance().addItem(result as Item);
      }
    });
  }

  changeItem(item: Item): void {

    const oldItem = new Item(item.name, item.description, item.statModifier);

    const dialogRef = this.dialog.open(ItemDetailDisplayComponent, {
      height: '400px',
      width: '600px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      const newItem = result as Item;
      if ( result !== null && result !== undefined && this.isValidItem(newItem)) {
        CharacterProvider.getInstance().changeItem(oldItem, newItem);
      }else{
        item.name = oldItem.name;
        item.description = oldItem.description;
        item.statModifier = oldItem.statModifier;
      }
    });
  }

  removeItem(item: Item): void {
    CharacterProvider.getInstance().removeItem(item);
  }

  private isValidItem(item: Item): boolean {
    return !(item.name === null || item.name === undefined || item.name.trim() === '');
  }
}
