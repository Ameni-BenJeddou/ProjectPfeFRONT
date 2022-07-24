import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { numberFormat } from 'highcharts';
import { Application } from 'src/app/Entities/Application';
import { Vacancy } from 'src/app/Entities/vacancy';
import { ApplicationService } from 'src/app/services/Application/application.service';
import { VacancyService } from 'src/app/services/Vacancy/vacancy.service';

@Component({
  selector: 'app-admin-vacancy-consult',
  templateUrl: './admin-vacancy-consult.component.html',
  styleUrls: ['./admin-vacancy-consult.component.css']
})
export class AdminVacancyConsultComponent  implements   OnInit {
  public dataSource : Vacancy[] = [];
  appdataSource : Application[]=[]
  appshortdataSource : Application[]=[]

  public editVacancy : Vacancy;
  public i :number;
  currentvacancy: Vacancy = {
      job_type : "",
      description :"",
      department :"",
      location :"",
      creation_Date : new Date(),
      is_Active : true, // false=inactive , true=actives
      relevant_Education_Level : 0,
      relevant_Experience_Level : 0,
  };
  viewvacancy: Vacancy = {
    job_type : "",
    description :"",
    department :"",
    location :"",
    creation_Date : new Date(),
    is_Active : true, // false=inactive , true=actives
    relevant_Education_Level : 0,
    relevant_Experience_Level : 0,
};
viewIndex = -1;

  submitted = false;
  currentIndex = -1;
edit=false;
view=false;

  constructor(private vacancyservice : VacancyService,private appservice:ApplicationService) { 
  
  }

  ngOnInit() {
    this.getvacancies();
  }
  setActiveVacancy(opening: Vacancy, index: number): void {
    this.currentvacancy = opening;
    this.currentIndex = index;
    this.edit=true;
  }
  getapplications (id:Vacancy) {
    console.log(id.id_Opening);
    this.appservice.getvacancyActive(id.id_Opening)
      .subscribe({
        next: (data) => {
          this.appdataSource=data;
          console.log(this.dataSource);
        },
        error: (e) => console.error(e)
      });
  }
  getshortlist (id:Vacancy) {
    this.appservice.getvacancyshortlist(id.id_Opening)
      .subscribe({
        next: (data) => {
          this.appshortdataSource=data;
          console.log(this.appshortdataSource);
        },
        error: (e) => console.error(e)
      });
  }
  setviewVacancy(opening: Vacancy, index: number): void {
    this.getshortlist(opening);
    this.getapplications(opening);
    this.viewvacancy = opening;
    this.viewIndex = index;
    this.view=true;
  }
  getvacancies () {
    this.vacancyservice.getAllactive()
      .subscribe({
        next: (data) => {
          this.dataSource=data;
          console.log(this.dataSource);
        },
        error: (e) => console.error(e)
      });
  }

  onAddVacancy(): void {
    const data = {
      job_type :this.currentvacancy.job_type,
      description :this.currentvacancy.description,
      department :this.currentvacancy.department,
      location :this.currentvacancy.location,
      gender :this.currentvacancy.gender,
      relevant_Education_Level :this.currentvacancy.relevant_Education_Level,
      relevant_Experience_Level :this.currentvacancy.relevant_Experience_Level,
    };
    this.vacancyservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newVacancy(): void {
    this.submitted = false;
    this.currentvacancy = {
      job_type : "",
      description :"",
      department :"",
      location :"",
      creation_Date : new Date(),
      is_Active : true, // false=inactive , true=active
      relevant_Education_Level : 0,
      relevant_Experience_Level : 0,
    };
  }
  public onUpdateVacancy(): void {
    this.vacancyservice.update(this.editVacancy.id_Opening,this.editVacancy).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.getvacancies();
      },
      error: (e) => console.error(e)
    });
  }

  public vacancyclose(Id: any, vacancy:Vacancy ): void {
    if(confirm("Are you sure to delete vacancy id "+Id))
    {  
      const data = {
        job_type :vacancy.job_type,
        description :vacancy.description,
        department :vacancy.department,
        location :vacancy.location,
        gender :vacancy.gender,
        relevant_Education_Level :vacancy.relevant_Education_Level,
        relevant_Experience_Level :vacancy.relevant_Experience_Level,
        creation_Date:vacancy.creation_Date,
        closure_Date : new Date(),
        is_Active : false,
      };
      this.vacancyservice.update(Id,data).subscribe({
      next: (res) => {
        console.log(res);
        this.getvacancies();
      },
      error: (e) => console.error(e)
    });
  }
  }
}
