import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AulasDetailComponent } from './aulas-detail/aulas-detail.component';
import { AulasComponent } from './aulas.component';

@NgModule({
  declarations: [
    AulasDetailComponent,
    AulasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    AulasComponent
  ]
})
export class AulasModule { }
