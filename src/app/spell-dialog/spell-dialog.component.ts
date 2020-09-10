import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-spell-dialog',
  templateUrl: './spell-dialog.component.html',
  styleUrls: ['./spell-dialog.component.css']
})
export class SpellDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SpellDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public spell: string) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
