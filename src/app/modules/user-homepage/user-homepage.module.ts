import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeCreateComponent } from 'src/app/components/resume-create/resume-create.component';
import { UserHomepageComponent } from 'src/app/components/user-homepage/user-homepage.component';
import { VacancyListComponent } from 'src/app/components/vacancy-list/vacancy-list.component';
import { VacancySearchComponent } from 'src/app/components/vacancy-search/vacancy-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../widgets/widgets.module';
import { UserSidebarComponent } from 'src/app/components/user-sidebar/user-sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppTrackComponent } from 'src/app/components/app-track/app-track.component';
import { CreateSponAppComponent } from 'src/app/components/create-spon-app/create-spon-app.component';
import { VacancyapplyComponent } from 'src/app/components/vacancyapply/vacancyapply.component';
@NgModule({
  declarations: [
    UserHomepageComponent,
    VacancySearchComponent,
    VacancyListComponent,
    ResumeCreateComponent,
    UserSidebarComponent,
    AppTrackComponent,
    CreateSponAppComponent,
    VacancyapplyComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    WidgetsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports : [
    VacancyListComponent,
    AppTrackComponent,
    VacancyapplyComponent,
  ]
})
export class UserHomepageModule { }
