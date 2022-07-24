import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/Entities/vacancy';
import { VacancyService } from 'src/app/services/Vacancy/vacancy.service';

@Component({
  selector: 'app-editvacancy',
  templateUrl: './editvacancy.component.html',
  styleUrls: ['./editvacancy.component.css']
})
export class EditvacancyComponent implements OnInit {
  @Input() editvacancyMode = false;
  @Input() editedVacancy:Vacancy = {
    id_Opening:0,
    job_type : "",
    description :"",
    department :"",
    location :"",
    creation_Date : new Date(),
    is_Active : true, // false=inactive , true=actives
    relevant_Education_Level : 0,
    relevant_Experience_Level : 0,
};
isSuccessful = false;
iseditFailed = false;
errorMessage = '';
  constructor(private vacancyservice: VacancyService) { }

  ngOnInit(): void {
  }
  dismissedit(){
    document.getElementById('edit').style.display = 'none';
  }
  onEditVacancy(){
    const data = {
      job_type :this.editedVacancy.job_type,
      creation_Date:this.editedVacancy.creation_Date,
      is_Active:this.editedVacancy.is_Active,
      description :this.editedVacancy.description,
      department :this.editedVacancy.department,
      location :this.editedVacancy.location,
      gender :this.editedVacancy.gender,
      relevant_Education_Level :this.editedVacancy.relevant_Education_Level,
      relevant_Experience_Level :this.editedVacancy.relevant_Experience_Level,
    };
    this.vacancyservice.update(this.editedVacancy.id_Opening,data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.isSuccessful = true;
          this.dismissedit();
        },
        error: (e) =>  {  
               this.errorMessage = e.error.message;
               this.iseditFailed=true;}

      });
  }
}
