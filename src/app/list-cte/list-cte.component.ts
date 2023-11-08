import { Component, Input } from '@angular/core';
import { CTEResponse } from '../shared/models/cte-response';

@Component({
  selector: 'app-list-cte',
  templateUrl: './list-cte.component.html',
  styleUrls: ['./list-cte.component.scss']
})
export class ListCteComponent {

  @Input() ctes: CTEResponse[] = []

  ngInit(): void {
    console.log(this.ctes)
  }
}
