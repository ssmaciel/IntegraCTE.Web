import { Component } from '@angular/core';
import { ApiService } from "src/app/shared/services/api.service";
import { CTEResponse } from '../shared/models/cte-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public loading: boolean = false;

  public ctes: CTEResponse[] = []

  constructor(private service: ApiService){

  }
  ngOnInit(): void {
    this.loading = true;
    this.service.retornarCTEs()
    .subscribe({
      next: (response) => {
        this.loading = false;
        if(response.length == 0) {
          //this.mensagemAlertaService.mostrarMensagemAlerta('CTEs não encontrado');
        } else {
          this.ctes = response;
        }
      },
      error: (response) => {
        this.loading = false;
        if (response.status === 401) {
          //this.mensagemAlertaService.mostrarMensagemAlerta('Acesso negado!');
          return;
        }
        //this.mensagemAlertaService.mostrarMensagemAlerta('Erro ao retornar tipo pessoa!');
      }
    });
  }
}
