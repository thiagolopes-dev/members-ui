import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MemberService } from './member.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  idString: string = '';
  selectedMember = { id: '', name: '', surname: '' };
  selected_id: any = '';
  constructor(
    private route: ActivatedRoute,
    private apiService: MemberService,
    private router: Router,
    private appComponent: AppComponent
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
        this.selectedMember = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateMember(id: any) {
    this.apiService.updateMember(this.selectedMember).subscribe(
      data => {
        this.selectedMember = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  newMembeR() {
    this.router.navigate(['/new-member'])
  }

  deleteMember() {
    this.apiService.deleteMember(this.selected_id).subscribe(
      data => {
        let index;
        this.appComponent.members.forEach((element, i) => {
          if (element.id === this.selected_id) {
            index = i;

          }
        });
        if (typeof index !== 'undefined') {
          this.appComponent.members.splice(index, 1);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
