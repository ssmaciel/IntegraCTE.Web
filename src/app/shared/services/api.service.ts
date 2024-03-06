import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CTEResponse } from '../models/cte-response';
import { ArquivoInputRequest } from '../models/arquivo-input-request';
import { CTEInputRequest } from '../models/cte-input-request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase = `${environment.linkApi}cte/ultimos`
  constructor(private readonly http: HttpClient) { }

  public retornarCTEs(): Observable<CTEResponse[]> {
    return this.http.get<CTEResponse[]>(`${this.urlBase}`)
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
