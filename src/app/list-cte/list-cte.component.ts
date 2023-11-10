import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CTEResponse } from '../shared/models/cte-response';

@Component({
  selector: 'app-list-cte',
  templateUrl: './list-cte.component.html',
  styleUrls: ['./list-cte.component.scss']
})
export class ListCteComponent {

  @Input() ctes: CTEResponse[] = []
  @Output() ctesAtualizados = new EventEmitter<CTEResponse[]>()
  public cteData: CTEResponse = {}

  selectAll: boolean = false;

  toggleAllSelection() {
    this.ctes = this.ctes.map(cte => {
      return { ...cte, selected: this.selectAll };
    });
    this.selectAll = this.ctes.every((cte) => cte.selected);
    this.ctesAtualizados.emit(this.ctes)
    console.log("toggleAllSelection")
  }

  checkIfAllSelected() {
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

}
