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

@NgModule({
  declarations: [
    AppComponent,
    MainStatDisplayComponent,
    SubStatDisplayComponent,
    ImpressumComponent,
    CharacterDisplayComponent,
    ImportExportComponent,
    PrettyjsonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
