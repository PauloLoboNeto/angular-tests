import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentA } from './componentA/componentA.component';
import { ComponentB } from './componentB/componentB.component';
import { ComponentC } from './componentC/componentC.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentA,
    ComponentB,
    ComponentC,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
