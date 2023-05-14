import { Amigo } from './amigo';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmigoService {

  private readonly api = `${environment.api}/projeto11/api/amizade`;

  constructor(private http: HttpClient) { }

  solicitarAmizade(id: number, idAmigo: number){
    const httpParams = new HttpParams()
    .set("id", id)
    .set("idAmigo", idAmigo);
    const url = this.api + "/solicitarAmizade?" + httpParams;
    return this.http.get(url).pipe(
      take(1)
    );
  }

  listarAmigos(id: number){
    return this.http.get<Amigo[]>(`${this.api}/listarAmigos/${id}`).pipe(
      take(1)
    );
  }

  verSolicatacao(idMeu: number, idAmigo: number) {
    const httpParams = new HttpParams()
    .set("idMeu", idMeu)
    .set("idAmigo", idAmigo);
    const url = this.api + "/verSolicitacao?" + httpParams;
    return this.http.get(url).pipe(
      take(1)
    );
  }
}
