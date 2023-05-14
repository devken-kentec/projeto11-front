import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GlobalService implements OnInit {

  private readonly api = `${environment.api}/projeto11/api`;

  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private sanitizer: DomSanitizer) { }

  id: number = 0;
  nome: string = '';
  email: string = '';

  ngOnInit(): void {
    this.setEmail("kennedy_tomazete@outlook.com");
  }

  setId(id: number): void{
    this.id = id;
  }

  getId(): number {
    const id = this.id;
    return id;
  }

  setNome(nome: string){
    this.nome = nome;
  }

  getNome(): string {
    const nome = this.nome;
    return nome;
  }

  setEmail(email: string){
    this.email = email;
  }

  getEmail(): string {
    const email = this.email;
    return email;
  }

  saveShow(mensagem: string, titulo: string){
    this.toastr.success(mensagem, titulo);
  }

  removeShow(mensagem: string, titulo: string){
    this.toastr.error(mensagem, titulo)
  }

  warningShow(mensagem: string, titulo: string){
    this.toastr.warning(mensagem, titulo)
  }

  loadByLogin(email: string){
    return this.http.get(`${this.api}/login/autenticar/${email}`).pipe(
      take(1)
    );
  }

  formatarDate(data: string){
    let dataCompleta = "";
			 let dia = data.substring(8,10);
			 let mes = data.substring(5,7);
       let ano = data.substring(0,4);

       if(dia.length == 1){
        dia = "0" + dia;
     }
      if(mes.length == 1){
        mes = "0" + mes
      }
     dataCompleta = dia+"/"+mes+"/"+ano
		 return dataCompleta;
  }

  formatarTime(time: string){
    let horaCompleta = "";
    let hora = time.substring(11,13);
    let minuto = time.substring(14, 16);

    if(hora.length == 1){
      hora = "0" + hora;
    }

    if(minuto.length == 1){
      minuto = "0" + minuto;
    }
    horaCompleta = hora + ":" + minuto;
    return horaCompleta;
  }

  renderUrl(url: string){
    let render = this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${url}`)
    return render;
  }
}
