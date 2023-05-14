import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  mostrarPostagemEmitter = new EventEmitter<boolean>();

  setLoggedIn(value: boolean){
    this.mostrarPostagemEmitter.emit(true);
  }
}
