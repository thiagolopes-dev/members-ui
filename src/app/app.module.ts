import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberService } from './member-detail/member.service';

@NgModule({
  declarations: [	
    AppComponent,
      MemberDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
