import { Postagem } from './postagem';
import { TipoPostagem } from './tipo-postagem';
import { Usuario } from './usuario';
import { take } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private readonly api = `${environment.api}/projeto11/api`;

  constructor(private http: HttpClient) { }

  enviarFormulario(usuario: Usuario){
    return this.http.post(`${this.api}/login`, usuario).pipe(
      take(1)
    );
  }

  selectTipoPostagem(){
    return this.http.get<TipoPostagem[]>(`${this.api}/home/tipoPostagem`).pipe(
      take(1)
    );
  }

  enviarPostagem(postagem: any){
    return this.http.post(`${this.api}/postagem`, postagem).pipe(
      take(1)
    );
  }

  buscarPorNome(nome: string){
    const httpParams = new HttpParams().set("nome", nome);
    return this.http.get<Usuario>(`${this.api}/home/pesquisa?${httpParams.toString()}`).pipe(
        take(1)
    );
  }

  listarPostagem(){
    return this.http.get<Postagem[]>(`${this.api}/sharedApi/listarPostagem`).pipe(
      take(1)
    );
  }
}
