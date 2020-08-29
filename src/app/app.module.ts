import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainStatDisplayComponent } from './main-stat-display/main-stat-display.component';
import { SubStatDisplayComponent } from './sub-stat-display/sub-stat-display.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { PrettyjsonPipe } from './prettyjson.pipe';
import { HealthDisplayComponent } from './health-display/health-display.component';
import { SavingthrowsDisplayComponent } from './savingthrows-display/savingthrows-display.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, } from '@angular/material/dialog';
import { ItemDetailDisplayComponent } from './item-detail-display/item-detail-display.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MainStatDisplayComponent,
    SubStatDisplayComponent,
    ImpressumComponent,
    CharacterDisplayComponent,
    ImportExportComponent,
    PrettyjsonPipe,
    HealthDisplayComponent,
    SavingthrowsDisplayComponent,
    ItemDisplayComponent,
    ItemDetailDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    ItemDetailDisplayComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
