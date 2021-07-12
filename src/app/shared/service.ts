import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Aulas } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private API = environment.api;
  private endPoints = {
    aulas: '/aulas'
  }

  constructor(private http: HttpClient) { }

  getAulas() {
    return this.http.get<Aulas[]>(`${this.API}${this.endPoints.aulas}`)
  }

}
