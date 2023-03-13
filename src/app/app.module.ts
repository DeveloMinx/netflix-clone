import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { Info1Component } from './components/info1/info1.component';
import { Info2Component } from './components/info2/info2.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Info1Component,
    Info2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
