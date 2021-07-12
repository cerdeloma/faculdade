import { Component, OnDestroy, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/service';

@Component({
  selector: 'app-aulas-detail',
  templateUrl: './aulas-detail.component.html',
  styleUrls: ['./aulas-detail.component.scss']
})
export class AulasDetailComponent implements OnInit {

  aulas: any;

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.getAula();
  }

  getAula() {
    this.service.getAulas()
    .subscribe(dados => this.aulas = dados)
  }

}
