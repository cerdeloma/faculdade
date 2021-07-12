import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AulasModule } from './aulas/aulas.module';
import { Service } from './shared/service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AulasModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
