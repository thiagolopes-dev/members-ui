import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMember: any;

  constructor(private apiService: ApiService){
  this.getMembers();
  }

  members = [
    {"name": 'Thiago', "surname": 'Lopes', "photo": 'https://gooogle.com.br'}
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
    this.apiService.getMember(member.id).subscribe(
      data => {
        console.log(data);
        this.selectedMember = data;
      }, 
      error => {
        console.log(error);
      }
    )
  }

  }

