import { Component, OnInit } from '@angular/core';
import { Job_skill_set } from 'src/app/Entities/Job_skill_set';
import { Skills } from 'src/app/Entities/Skills';
import { Vacancy } from 'src/app/Entities/vacancy';
import { JobSkillSetService } from 'src/app/services/job_skills/job-skill-set.service';
import { SkillService } from 'src/app/services/skill/skill.service';
import { VacancyService } from 'src/app/services/Vacancy/vacancy.service';

@Component({
  selector: 'app-addvacancy',
  templateUrl: './addvacancy.component.html',
  styleUrls: ['./addvacancy.component.css']
})
export class AddvacancyComponent implements OnInit {
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
skills: Skills[];
a
addedskillsets:any[] =[];
isSuccessful = false;
isaddFailed = false;
errorMessage = '';

  constructor(private vacancyservice : VacancyService, private skillservice : SkillService ,
    private jobskillsetservice:JobSkillSetService) { }

  ngOnInit(): void {
    this.getskills();

  }
  onAddVacancy(): void {
    const data = {
      job_type :this.currentvacancy.job_type,
      creation_Date:this.currentvacancy.creation_Date,
      is_Active:this.currentvacancy.is_Active,
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
          this.isSuccessful = true;
          this.setnewvacancy();
          for (let skill of this.addedskillsets)
          {
            const skillset= {
              level:skill.level,
              id_Skill:skill.Id,
              id_Opening:res,
            }
            this.jobskillsetservice.create(skillset).subscribe({
              next:(result)=> {console.log(result);},
              error:(e)=> {
                console.log(e.message);}
            })
          }
        },
        error: (e) =>  {  
               this.errorMessage = e.error.message;
               this.isaddFailed=true;}

      });
  }
  setnewvacancy(){
    this.currentvacancy= {
      job_type : "",
      description :"",
      department :"",
      location :"",
      creation_Date : new Date(),
      is_Active : true, // false=inactive , true=actives
      relevant_Education_Level : 0,
      relevant_Experience_Level : 0,
  };
  }
  getskills(){
    this.skillservice.getAll().subscribe({
      next:(res) => {
        console.log(res);
        this.skills=res;
      },
      error: (e) => console.error(e)
    });
  }
  addskill(){
    var skill = document.getElementById("skill") as HTMLSelectElement;
    var skillid = parseInt(skill.options[skill.selectedIndex].value);
    var level = document.getElementById("level") as HTMLSelectElement;
    var leveldegree = parseInt(level.options[level.selectedIndex].text);

    this.skillservice.get(skillid).subscribe({
      next:(res)=> {
        
        this.addedskillsets.push({Id:res,level:leveldegree});
      console.log(this.addedskillsets);
    },
      error: (e) =>  {  
      this.errorMessage = e.error.message;
      }}
    );
    
  }
}
