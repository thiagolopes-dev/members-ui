import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from './member.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  selectedMember = { name: '', surname: ''};
  constructor(
    private route: ActivatedRoute,
    private apiService: MemberService
    ) { }

  ngOnInit() {
    this.loadMember();
  }
  loadMember() {
    const idString = this.route.snapshot.paramMap.get('id');
  
    if (idString !== null) {
      const id = +idString; // Converte a string para número
      console.log(id);
  
      this.apiService.getMember(id).subscribe(
        data => {
          console.log(data);
          this.selectedMember = data;
        }, 
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('ID não está presente ou é nulo.');
    }
  }

}
