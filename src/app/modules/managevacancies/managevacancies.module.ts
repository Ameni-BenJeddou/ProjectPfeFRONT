import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddvacancyComponent } from 'src/app/components/addvacancy/addvacancy.component';
import { ManagevacanciesComponent } from 'src/app/components/managevacancies/managevacancies.component';
import { AdminVacancyConsultComponent } from 'src/app/components/admin-vacancy-consult/admin-vacancy-consult.component';
import { FormsModule } from '@angular/forms';
import { EditvacancyComponent } from 'src/app/components/editvacancy/editvacancy.component';
import { VacancyApplicationsComponent } from 'src/app/components/vacancy-applications/vacancy-applications.component';



@NgModule({
  declarations: [
    ManagevacanciesComponent,
    AddvacancyComponent,
    AdminVacancyConsultComponent,
    EditvacancyComponent,
    VacancyApplicationsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    AddvacancyComponent,
    AdminVacancyConsultComponent,
    EditvacancyComponent,
    VacancyApplicationsComponent,

  ]
})
export class ManagevacanciesModule { }
