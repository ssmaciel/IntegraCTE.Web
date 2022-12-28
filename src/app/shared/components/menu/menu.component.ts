import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private readonly router: Router,
    private readonly loginService: LoginService) { }

  ngOnInit(): void {
  }

  public abrirPaginaInicial(): void {
    this.router.navigateByUrl('');
  }

  public estaAutenticado() {
    return this.loginService.estaAutenticado();
  }

  public desautenticar(): void {
    this.loginService.desautenticar();
  }

  public abrirPaginaTrocaSenha(): void {
    this.router.navigateByUrl('/troca-senha');
  }

  public abrirPaginaTransferirCota(): void {
    this.router.navigateByUrl('/transferir-cota');
  }
  public abrirPaginaReservarCota(): void {
    this.router.navigateByUrl('/reservar-cota');
  }
}
