import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private nomeUsuario = 'Usuário';

  constructor() { }

  public retornarNomeUsuario(): string {
    return this.nomeUsuario;
  }
}
