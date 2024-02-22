import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:8000';

  token: string = 'Token 6e670b871af650062477a0dc196ce237eb1d547d';
  httpHeaders = new HttpHeaders().set('Content-type', 'application/json')
  .set('Authorization', this.token)

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

  saveMember(member: any): Observable<any> {
    return this.http.post(this.apiUrl + '/members/', member,
      { headers: this.httpHeaders }
    );
  }

}
