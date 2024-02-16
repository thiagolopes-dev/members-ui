import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MemberService } from './member.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  idString: string = '';
  selectedMember = { name: '', surname: ''};
  selected_id: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: MemberService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      if (id !== null) {
          this.selected_id = parseInt(id);
          this.loadMember(id);
      }
   })
   
  }
  loadMember(id: any) {
      this.apiService.getMember(id).subscribe(
        data => {
          console.log(data);
          this.selectedMember = data;
        }, 
        error => {
          console.log(error);
        }
      );
}
}
