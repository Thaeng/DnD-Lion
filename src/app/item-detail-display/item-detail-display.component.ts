import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Item } from 'src/stats/entity/Item';


@Component({
  selector: 'app-item-detail-display',
  templateUrl: './item-detail-display.component.html',
})
export class ItemDetailDisplayComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ItemDetailDisplayComponent>,
              @Inject(MAT_DIALOG_DATA) public item: Item) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
