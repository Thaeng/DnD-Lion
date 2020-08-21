import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainStatDisplayComponent } from './main-stat-display/main-stat-display.component';
import { SubStatDisplayComponent } from './sub-stat-display/sub-stat-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainStatDisplayComponent,
    SubStatDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
