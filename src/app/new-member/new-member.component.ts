import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {


  member = {
    name: '', surname: '', phone: ''
  }
  constructor(
    private apiService: ApiService,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
  }

  save(){
    this.apiService.saveMember(this.member).subscribe(
      data => {
        console.log(data);
        this.appComponent.members.push(data);
      //  this.selectedMember = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

}
