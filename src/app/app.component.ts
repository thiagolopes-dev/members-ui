import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMember: any;

  constructor(
    private apiService: ApiService,
    private router: Router
    ){
  this.getMembers();
  }

  members = [
    {"id": 1 , "name": 'Thiago', "surname": 'Lopes', "photo": 'https://gooogle.com.br'}
  ]

  getMembers = () => {
    this.apiService.getAllMembers().subscribe(
      data => {
        this.members = data;
      }, 
      error => {
        console.log(error);
      }
    )
  }
  memberID = (member: any) =>{
   this.router.navigate(['/memberdetail/', member.id])
  }

  }

