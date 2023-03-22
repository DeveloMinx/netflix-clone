import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { Info1Component } from './components/info1/info1.component';
import { Info2Component } from './components/info2/info2.component';
import { Info3Component } from './components/info3/info3.component';
import { Info4Component } from './components/info4/info4.component';
import { Info5Component } from './components/info5/info5.component';
import { SharedComponent } from './components/shared/shared.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Info1Component,
    Info2Component,
    Info3Component,
    Info4Component,
    Info5Component,
    SharedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
