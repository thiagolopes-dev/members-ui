import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MemberService {
    apiUrl = 'http://localhost:8000';
    token: string = 'Token 6e670b871af650062477a0dc196ce237eb1d547d';
    httpHeaders = new HttpHeaders().set('Content-type', 'application/json')
    .set('Authorization', this.token)
  
    constructor(private http: HttpClient) { }
  
    getMember(id: number): Observable<any> {
      return this.http.get(this.apiUrl + '/members/' + id + '/',
        { headers: this.httpHeaders }
      );
    }
    updateMember(member: any): Observable<any> {
     let body = { name: member.name, surname: member.surname, phone: member.phone} 

      return this.http.put(this.apiUrl + '/members/' + member.id + '/', body,
        { headers: this.httpHeaders }
      );
    }

    deleteMember(id: any): Observable<any> {
       return this.http.delete(this.apiUrl + '/members/' + id + '/',
         { headers: this.httpHeaders }
       );
     }
}