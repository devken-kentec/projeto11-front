import { DadosComplementares } from './dados-complementares';
import { Perfil } from './perfil';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Postagem } from '../../home/shared/postagem';
import { Amigo } from '../../amigos/shared/amigo';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly api = `${environment.api}/projeto11/api`;

  constructor(private http: HttpClient) { }

  findById(id: number){
    return this.http.get<Perfil>(`${this.api}/perfil/${id}`).pipe(
      take(1)
    );
  }

  findByPostagemUsuarioId(id: number){
    return this.http.get<Postagem[]>(`${this.api}/postagem/listarPostagemUsuarioId/${id}`).pipe(
      take(1)
    );
  }

  findByDadosComplementares(id: number){
    return this.http.get<DadosComplementares>(`${this.api}/perfil/dadosComplementares/${id}`).pipe(
      take(1)
    );
  }

  public updatePerfil(perfil: Perfil){
    return this.http.put(`${this.api}/perfil/alterarUsuario`, perfil).pipe(
      take(1)
    );
  }

  private createDadosComplementares(dadosComplementares: DadosComplementares){
    return this.http.post(`${this.api}/perfil/dadosComplementares`, dadosComplementares).pipe(
      take(1)
    );
  }

  private updateDadosComplementares(dadosComplementares: DadosComplementares){
    return this.http.put(`${this.api}/perfil/dadosComplementares`, dadosComplementares).pipe(
      take(1)
    );
  }

  public save(dadosComplementares: DadosComplementares){
    if(dadosComplementares.idComplementar){
      return this.updateDadosComplementares(dadosComplementares)
    } else {
      return this.createDadosComplementares(dadosComplementares);
    }
  }

  findByAmigosUsuarioId(id: number){
    return this.http.get<Amigo[]>(`${this.api}/perfil/listarAmigos/${id}`).pipe(
      take(1)
    );
  }

  findByAmigosSolicitacaoId(id: number){
    return this.http.get<Amigo[]>(`${this.api}/perfil/listarAmigosSolicitando/${id}`).pipe(
      take(1)
    );
  }

  upload(id: number, formData: FormData){
    return this.http.put(`${this.api}/perfil/arquivo/${id}`, formData).pipe(
      take(1)
    );
  }
}
