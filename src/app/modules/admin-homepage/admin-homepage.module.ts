import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomepageComponent } from 'src/app/components/admin-homepage/admin-homepage.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../widgets/widgets.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AdminVacancyConsultComponent } from 'src/app/components/admin-vacancy-consult/admin-vacancy-consult.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'
import { AddvacancyComponent } from 'src/app/components/addvacancy/addvacancy.component';
import { ManagevacanciesModule } from '../managevacancies/managevacancies.module';
import { AdminApplicationConsultComponent } from 'src/app/components/admin-application-consult/admin-application-consult.component';
import { EditvacancyComponent } from 'src/app/components/editvacancy/editvacancy.component';


@NgModule({
  declarations: [
    AdminHomepageComponent,
    DashboardComponent,
    AdminApplicationConsultComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    WidgetsModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    ManagevacanciesModule
  ],
  exports : [

  ]
})
export class AdminHomepageModule { }
