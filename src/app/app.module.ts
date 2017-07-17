import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {WeaponStatsComponent} from "./WeaponStats/WeaponStats.component";
import {ModsComponent} from "./Mods/Mods.component";
import {WWDCService} from "./Services/wwdc.service";

@NgModule({
  declarations: [
    AppComponent,
    WeaponStatsComponent,
    ModsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [WWDCService],
  bootstrap: [AppComponent]
})

export class AppModule {}
