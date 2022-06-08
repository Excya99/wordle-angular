import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRandomWordService {

  constructor(private http: HttpClient) { }

  callAPI(): Observable<any> {
    return this.http.get<any>("directory of wordle_api.php", {responseType: 'json'});
  }
}