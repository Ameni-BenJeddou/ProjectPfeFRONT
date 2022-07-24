import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvacancyComponent } from './components/addvacancy/addvacancy.component';
import { AdminApplicationConsultComponent } from './components/admin-application-consult/admin-application-consult.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { AdminVacancyConsultComponent } from './components/admin-vacancy-consult/admin-vacancy-consult.component';
import { AppTrackComponent } from './components/app-track/app-track.component';
import { CreateSponAppComponent } from './components/create-spon-app/create-spon-app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ManageaccountComponent } from './components/manageaccount/manageaccount.component';
import { ManagevacanciesComponent } from './components/managevacancies/managevacancies.component';
import { ResumeCreateComponent } from './components/resume-create/resume-create.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';
import { VacancySearchComponent } from './components/vacancy-search/vacancy-search.component';

const routes: Routes = [
  {path : '',
  component : LoginComponent,},
  {path : 'signup', component :SignupComponent },
  {path : 'createresume', component :ResumeCreateComponent },
  {
    path: 'Admin', component: AdminHomepageComponent,
      children: [{
         path: '',component: DashboardComponent},
         { path: 'managevacancies',component: ManagevacanciesComponent,
         children:[{ path: '',component: AdminVacancyConsultComponent},  
         { path: 'add',component: AddvacancyComponent},  
        ]
        },  { path: 'manageapplications',component: AdminApplicationConsultComponent,
        
       },  
        
        { path: 'account',component: ManageaccountComponent},  

      ]
  },
  {
    path: 'User', component: UserHomepageComponent,
      children: [{
         path: '',component: VacancySearchComponent},
         { path: 'createresume',component: ResumeCreateComponent},
         { path: 'vacancylist',component: VacancyListComponent},
         { path: 'apptrack',component: AppTrackComponent},
         { path: 'resumeupdate',component: VacancySearchComponent},
         { path: 'sponapp',component: CreateSponAppComponent},
         { path: 'account',component: ManageaccountComponent},
          
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
