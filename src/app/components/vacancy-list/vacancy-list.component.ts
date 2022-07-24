import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/Entities/vacancy';
import { VacancyService } from '../../services/Vacancy/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  public vacancies!: Vacancy[];
 
  currentIndex:number;
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
  constructor(private vacancyservice : VacancyService) { }

  ngOnInit(): void {
    this.getVacancies();
  }
  public getVacancies(): void {
    this.vacancyservice.getAllactive().subscribe(
      (response: Vacancy[]) => {
        this.vacancies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  setActiveVacancy(vacancy: Vacancy, index: number): void {
    this.currentvacancy = vacancy;
    this.currentIndex = index;
  }

}
