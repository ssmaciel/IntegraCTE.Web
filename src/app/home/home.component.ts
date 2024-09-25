import { Component } from '@angular/core';
import { ApiService } from "src/app/shared/services/api.service";
import { CTEResponse, ListCTEResponse } from '../shared/models/cte-response';
import { ArquivoInputRequest } from '../shared/models/arquivo-input-request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public loading: boolean = false;
  public qtdeCtes: number = 0;
  public qtdeCtesProcessados: number = 0;
  public qtdeCtesProcessadosSucesso: number = 0;
  public qtdeCtesProcessadosComErro: number = 0;
  public qtdeCtesIntegrar: number = 0;
  public qtdeCtesIntegrado: number = 0;

  public listCtes?: ListCTEResponse 
  public ctes: CTEResponse[] = []
  public totalItens = 0;
  public pagina = 1;
  public itensPorPagina: number = 20;
  
  constructor(private service: ApiService){

  }
  ngOnInit(): void {
    this.carregarCTEs(1, "Pendente");
  }

  ctesSelecionados(): boolean {
    return this.ctes.some(cte => cte.selected)
  }

  carregarCTEs(pagina: number, status?: string): void {
    this.loading = true;
    this.service.retornarCTEs(pagina, this.itensPorPagina, status)
    .subscribe({
      next: (response) => {
        this.loading = false;
        if(response.itens.length == 0) {
          //this.mensagemAlertaService.mostrarMensagemAlerta('CTEs não encontrado');
          alert('CTEs não encontrado')
        } else {
          this.listCtes = response;//.filter(f => f.status == "Pendente");
          this.totalItens = this.listCtes.total
          this.ctes = this.listCtes.itens
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

  atualizarListaCTEs(pagina: number){
    this.pagina = pagina
    this.carregarCTEs(this.pagina);
  }

  atualizarListaCTEsStatus(status: string){
    this.carregarCTEs(this.pagina, status);
  }

  atuailzarCtes(ctesAtualizados: CTEResponse[]): void{
    this.ctes = ctesAtualizados;
  }

  receberZip(input: ArquivoInputRequest){
    
    if(input.file === null) {
      // this.mensagemAlertaService.mostrarMensagemAlerta("Arquivo não selecionado!");  
      return;
    }
    
    const formData = new FormData();

    let blob :Blob  = input.file;
    formData.append('file', blob, input.file?.name);
    formData.append('fatura', input.fatura);
    this.service.enviarCTEZIP(formData)
    .subscribe({
      next: (response) => {
        console.log(response);
        alert(`Sucesso: ${response}`)
        ++this.qtdeCtesProcessados
        ++this.qtdeCtesProcessadosSucesso
        if (this.qtdeCtes == this.qtdeCtesProcessados) {
          this.carregarCTEs(1);
        }
        // this.mensagemAlertaService.mostrarMensagemSucesso("Proposta Finalizada.");
        // this.localStorage.removerItensUsuario();
        // this.router.navigateByUrl('/');
      },
      error: (response) => {
        console.log(response);
        alert(`Erro: ${response}`)
        alert(response)
        ++this.qtdeCtesProcessados
        ++this.qtdeCtesProcessadosComErro
        if (this.qtdeCtes == this.qtdeCtesProcessados) {
          this.carregarCTEs(1);
        }
        //this.mensagemAlertaService.mostrarMensagemAlerta('Erro ao finalizar proposta.');
      }
    });;
  }

  receberInformacao(input: ArquivoInputRequest): void {
    console.log(input)
    ++this.qtdeCtes
    this.service.enviarCTE(input)
    .subscribe({
      next: (response) => {
        console.log(response);
        ++this.qtdeCtesProcessados
        ++this.qtdeCtesProcessadosSucesso
        if (this.qtdeCtes == this.qtdeCtesProcessados) {
          this.carregarCTEs(1);
        }
        // this.mensagemAlertaService.mostrarMensagemSucesso("Proposta Finalizada.");
        // this.localStorage.removerItensUsuario();
        // this.router.navigateByUrl('/');
      },
      error: (response) => {
        console.log(response);
        ++this.qtdeCtesProcessados
        ++this.qtdeCtesProcessadosComErro
        if (this.qtdeCtes == this.qtdeCtesProcessados) {
          this.carregarCTEs(1);
        }
        //this.mensagemAlertaService.mostrarMensagemAlerta('Erro ao finalizar proposta.');
      }
    });;
  }

  integrarCte(): void {
    this.ctes.filter(cte => cte.selected).forEach(cte => {
      ++this.qtdeCtesIntegrar
      this.service.integrarCTE(cte.id??"")
      .subscribe({
        next: (response) => {
          ++this.qtdeCtesIntegrado
          if (this.qtdeCtesIntegrar == this.qtdeCtesIntegrado) {
            this.carregarCTEs(1);
            this.qtdeCtesIntegrar = 0
            this.qtdeCtesIntegrado = 0
          }
        },
        error: (response) => {
          ++this.qtdeCtesIntegrado
          if (this.qtdeCtesIntegrar == this.qtdeCtesIntegrado) {
            this.carregarCTEs(1);
            this.qtdeCtesIntegrar = 0
            this.qtdeCtesIntegrado = 0
          }
        }
      })
    })
  }

}
