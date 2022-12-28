import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MensagemService } from './mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html'
})
export class MensagemAlertaComponent implements OnInit {

  private mensagemAlerta: string = '';
  private flagAlerta: boolean = false;
  private sucesso: boolean = false;

  constructor(private readonly mensagemAlertaService: MensagemService) { }

  ngOnInit(): void {
    this.mensagemAlertaService.notifier
      .pipe(
        tap((retorno) => {
          this.mensagemAlerta = retorno.mensagem;
          this.flagAlerta = true;
          this.sucesso = retorno.sucesso
        }),
        switchMap(mensagem => timer(5000))
      ).subscribe(timer => this.flagAlerta = false);
  }

  public alertaAtivo(): boolean {
    return this.flagAlerta;
  }

  public fecharAlerta(): void {
    this.flagAlerta = false;
  }

  public retornarMensagemAlerta(): string {
    return this.mensagemAlerta;
  }

  public retornarSeEhSucesso(): boolean {
    return this.sucesso;
  }

}
