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