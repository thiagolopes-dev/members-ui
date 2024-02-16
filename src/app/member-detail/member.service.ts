import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MemberService {
    apiUrl = 'http://localhost:8000';
    httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  
    constructor(private http: HttpClient) { }
  
    getMember(id: number): Observable<any> {
      return this.http.get(this.apiUrl + '/members/' + id + '/',
        { headers: this.httpHeaders }
      );
    }
}