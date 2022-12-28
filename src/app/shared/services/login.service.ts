import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly router: Router) { }

  private criarSessao(autenticador: any) {
    localStorage.setItem('token', autenticador);
  }

  public autenticar(usuario: any): boolean {
    if (usuario.senha !== '123456') {
      return false;
    }

    this.criarSessao(usuario);

    return true;
  }

  public desautenticar(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('autenticar');
  }

  public estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

  public apresentarLogin(): void {
    this.router.navigateByUrl('autenticar');
  }
}
