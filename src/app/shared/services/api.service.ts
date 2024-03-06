import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CTEResponse, ListCTEResponse } from '../models/cte-response';

import { ArquivoInputRequest } from '../models/arquivo-input-request';
import { CTEInputRequest } from '../models/cte-input-request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase = `${environment.linkApi}cte/ultimos`
  constructor(private readonly http: HttpClient) { }

  public retornarCTEs(pagina: number, tamanhoPagina: number): Observable<ListCTEResponse> {
    return this.http.get<ListCTEResponse>(`${this.urlBase}?pagina=${pagina}&tamanhoPagina=${tamanhoPagina}`, {
      headers: {
        ["Cache-Control"]:"public,max-age=1"
      }
    })

    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public enviarCTE(input: ArquivoInputRequest): Observable<CTEResponse[]> {
    return this.http.post<any>(`${environment.linkApi}xml/upload`, input)
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public integrarCTE(id: string): Observable<any> {
    return this.http.post<any>(`${environment.linkApi}Integracao/${id}`, {})
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

}
