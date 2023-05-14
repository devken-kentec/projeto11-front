import { Empresa } from './empresa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly api = `${environment.api}/projeto11/api/empresa`;

  constructor(private http: HttpClient) { }

  create(empresa: Empresa){
    return this.http.post(`${this.api}`, empresa).pipe(
      take(1)
    );
  }
}
