import { Component, Input } from '@angular/core';
import { CTEResponse } from '../shared/models/cte-response';

@Component({
  selector: 'app-list-cte',
  templateUrl: './list-cte.component.html',
  styleUrls: ['./list-cte.component.scss']
})
export class ListCteComponent {

  @Input() ctes: CTEResponse[] = []
  public cteData: CTEResponse = {}

  ngInit(): void {
    console.log(this.ctes)
  }
  openCteDialog(cte: any) { // Substitua 'any' pelo tipo adequado
    this.cteData = cte;
    // Aqui você precisa abrir o modal. Se estiver usando Bootstrap, pode fazer assim:
    
  }

}
