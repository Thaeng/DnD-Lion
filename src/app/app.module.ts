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
    ItemDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
