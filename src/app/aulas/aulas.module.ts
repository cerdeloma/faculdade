import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulasDetailComponent } from './aulas-detail/aulas-detail.component';
import { AulasComponent } from './aulas.component';

@NgModule({
  declarations: [
    AulasDetailComponent,
    AulasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AulasComponent
  ]
})
export class AulasModule { }
