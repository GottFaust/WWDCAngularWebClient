import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {WeaponStatsComponent} from "./WeaponStats/WeaponStats.component";
import {ModsComponent} from "./Mods/Mods.component";
import {WWDCService} from "./Services/wwdc.service";
import {ResultsComponent} from "./Results/Results.component";

@NgModule({
  declarations: [
    AppComponent,
    WeaponStatsComponent,
    ModsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [WWDCService],
  bootstrap: [AppComponent]
})

export class AppModule {}
