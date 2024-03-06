import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CTEResponse,ListCTEResponse } from '../shared/models/cte-response';

@Component({
  selector: 'app-list-cte',
  templateUrl: './list-cte.component.html',
  styleUrls: ['./list-cte.component.scss']
})
export class ListCteComponent {

  @Input() listCtes?: ListCTEResponse
  @Input() totalItens: number = 0
  @Input() ctes?: CTEResponse[] = []
  @Input() itensPorPagina: number = 20
  @Output() ctesAtualizados = new EventEmitter<CTEResponse[]>()
  @Output() atualizarListaCTEs = new EventEmitter<number>()
  public cteData: CTEResponse = {}

  selectAll: boolean = false;

  //#region Props Paginação
  private pagina = 1;
  //private itensPorPagina = 20;
  //private totalItens = 0;
  private limitePagina = 15;
  private atualPrimeiraPaginaLimite = 1;
  private atualUltimaPaginaLimite = this.limitePagina;
  private readonly qtdDiasUltimasVendas = 7; 
  //#endregion

  toggleAllSelection() {
    if (this.ctes == null  || this.ctes?.length <= 0) {
      return;
    }
    this.ctes = this.ctes.map(cte => {
      return { ...cte, selected: this.selectAll };
    });
    this.selectAll = this.ctes.every((cte) => cte.selected);
    this.ctesAtualizados.emit(this.ctes)
    console.log("toggleAllSelection")
  }

  checkIfAllSelected() {
    if (this.ctes == null  || this.ctes?.length <= 0) {
      return;
    }
    this.selectAll = this.ctes.every((cte) => cte.selected);
    console.log("checkIfAllSelected")
  }

  ngInit(): void {
    console.log(this.ctes)
  }
  openCteDialog(cte: any) { // Substitua 'any' pelo tipo adequado
    this.cteData = cte;
    // Aqui você precisa abrir o modal. Se estiver usando Bootstrap, pode fazer assim:
    
  }

  //#region Paginação

  public retornarTotalPaginas(): number {
    return Math.ceil(this.totalItens / this.itensPorPagina);
  }

  public retornarPaginas(): number[] {
    let paginas = [];

    for (let i = this.atualPrimeiraPaginaLimite; i <= this.atualUltimaPaginaLimite; i++) {
      paginas.push(i);
    }

    return paginas;
  }

  public estaNoInicio(): boolean {
    return this.atualPrimeiraPaginaLimite === 1;
  }

  public estaNoFim(): boolean {
    return this.atualUltimaPaginaLimite === this.retornarTotalPaginas();
  }

  public ultrapassouLimitePagina(): boolean {
    return this.retornarTotalPaginas() > this.limitePagina;
  }

  public estaNaPrimeiraPagina(): boolean {
    return this.pagina === 1;
  }

  public estaNaUltimaPagina(): boolean {
    return this.pagina === this.retornarTotalPaginas();
  }

  public alterarPaginacao(proxPag: number): void {
    if (proxPag === 1) {
      this.atualPrimeiraPaginaLimite = 1;
      this.atualUltimaPaginaLimite = this.limitePagina;
    } else if (proxPag === this.retornarTotalPaginas()) {
      this.atualPrimeiraPaginaLimite = this.retornarTotalPaginas() - (this.limitePagina - 1);
      this.atualUltimaPaginaLimite = this.retornarTotalPaginas();
      if(this.atualPrimeiraPaginaLimite===0)
      this.atualPrimeiraPaginaLimite=1;
    }

    this.pagina = proxPag;

    this.retornarUltimasVendas();
  }

  public paginaAtual(): number {
    return this.pagina;
  }

  public descerPaginaLimite(): void {
    this.atualPrimeiraPaginaLimite -= 1;
    this.atualUltimaPaginaLimite -= 1;

    if(this.atualPrimeiraPaginaLimite===0)
        this.atualPrimeiraPaginaLimite=1;

    this.retornarUltimasVendas();
  }

  public subirPaginaLimite(): void {
    this.atualPrimeiraPaginaLimite += 1;
    this.atualUltimaPaginaLimite += 1;

    if(this.atualPrimeiraPaginaLimite===0)
      this.atualPrimeiraPaginaLimite=1;

    this.retornarUltimasVendas();
  }

  public retornarUltimasVendas() {
    this.atualizarListaCTEs.emit(this.pagina)
  }
  //#endregion

}
