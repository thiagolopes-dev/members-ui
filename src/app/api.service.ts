import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient) { }


  getAllMembers(): Observable<any> {
    return this.http.get(this.apiUrl + '/members/',
      { headers: this.httpHeaders }
    );
  }

  getMember(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/members/' + id + '/',
      { headers: this.httpHeaders }
    );
  }

}
