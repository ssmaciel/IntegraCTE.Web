import { Component, Input } from '@angular/core';
import { CTEResponse, ValidacoeResponse } from '../shared/models/cte-response';

@Component({
  selector: 'app-cte-dialog',
  templateUrl: './cte-dialog.component.html',
  styleUrls: ['./cte-dialog.component.scss']
})
export class CteDialogComponent {
  @Input() cteData: CTEResponse = {} 
  @Input() validacoes?: ValidacoeResponse[] = [];

}
