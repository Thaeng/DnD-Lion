import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Item } from 'src/stats/entity/Item';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';


@Component({
  selector: 'app-item-detail-display',
  templateUrl: './item-detail-display.component.html',
})
export class ItemDetailDisplayComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after'];
  position = new FormControl(this.positionOptions[0]);

  constructor(public dialogRef: MatDialogRef<ItemDetailDisplayComponent>,
              @Inject(MAT_DIALOG_DATA) public item: Item) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
