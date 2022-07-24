import { Component, Input, OnInit } from '@angular/core';
import { Application } from 'src/app/Entities/Application';
import { Job_skill_set } from 'src/app/Entities/Job_skill_set';
import { User_skill_set } from 'src/app/Entities/User_skill_set';
import { Vacancy } from 'src/app/Entities/vacancy';
import { ApplicationService } from 'src/app/services/Application/application.service';
import { JobSkillSetService } from 'src/app/services/job_skills/job-skill-set.service';
import { UserSkillSetService } from 'src/app/services/user_skills/user-skill-set.service';

@Component({
  selector: 'app-vacancy-applications',
  templateUrl: './vacancy-applications.component.html',
  styleUrls: ['./vacancy-applications.component.css']
})
export class VacancyApplicationsComponent implements OnInit {
  @Input() viewappMode = false;

  @Input() viewVacancy:Vacancy = {
    id_Opening:0,
    job_type : "",
    description :"",
    department :"",
    location :"",
    creation_Date : new Date(),
    is_Active : null, // false=inactive , true=actives
    relevant_Education_Level : 0,
    relevant_Experience_Level : 0,
};
existinguserset:User_skill_set=null;
@Input() dataSource : Application[] = [];
@Input() shortdataSource : Application[] = [];
  jobskillset:Job_skill_set[]=[];
  userskillset:User_skill_set[]=[];
  public i :number;
  currentapp: Application = {
    id_Application:0,
    creation_Date:new Date(),
  relevant_Education_Level : null,
  relevant_Experience_Level : null,
  gender : null,
  status : "waiting",
  id_User : null,
  id_Opening : null,
  };
  submitted = false;
  currentIndex = -1;

  constructor(private appservice:ApplicationService,private jobsetservice:JobSkillSetService,
    private usersetservice:UserSkillSetService) { }

  ngOnInit(): void {
   
  }
  setActiveApplication(application: Application, index: number): void {
    this.currentapp= application;
    this.currentIndex = index;
  }
  getapplications () {
    console.log(this.viewVacancy.id_Opening);
    this.appservice.getvacancyActive(this.viewVacancy.id_Opening)
      .subscribe({
        next: (data) => {
          this.dataSource=data;
          console.log(this.dataSource);
        },
        error: (e) => console.error(e)
      });
  }
  getshortlist () {
    this.appservice.getvacancyshortlist(this.viewVacancy.id_Opening)
      .subscribe({
        next: (data) => {
          this.shortdataSource=data;
          console.log(this.shortdataSource);
        },
        error: (e) => console.error(e)
      });
  }
  removefromshortlist( id: number ,application: Application )
  {
    if(confirm("Are you sure to remove application id "+id+" from short list?"))
  {  
    const data = {
  status : "waiting",
  id_User : application.id_User,
  id_Opening : application.id_Opening,
      gender :application.gender,
      relevant_Education_Level :application.relevant_Education_Level,
      relevant_Experience_Level :application.relevant_Experience_Level,
      creation_Date:application.creation_Date,
      is_Active : false,
    };
    this.appservice.update(id,data).subscribe({
    next: (res) => {
      console.log(res);
      this.getshortlist();
      this.getapplications();

    },
    error: (e) => console.error(e)
  });
}

  }
  declineapp( id: number ,application: Application )
  {
    if(confirm("Are you sure to decline application id "+id))
  {  
    const data = {
  status : "Declined",
  id_User : application.id_User,
  id_Opening : application.id_Opening,
      gender :application.gender,
      relevant_Education_Level :application.relevant_Education_Level,
      relevant_Experience_Level :application.relevant_Experience_Level,
      creation_Date:application.creation_Date,
      is_Active : false,
    };
    this.appservice.update(id,data).subscribe({
    next: (res) => {
      console.log(res);
      this.getshortlist();
      this.getapplications();

    },
    error: (e) => console.error(e)
  });

  }
}
  addtoshortlist( id: number ,application: Application )
  
    {
      if(confirm("Are you sure to add application id "+id+" to short list?"))
    {  
      const data = {
        status : "Shortlist",
        id_User : application.id_User,
        id_Opening : application.id_Opening,
        gender :application.gender,
        relevant_Education_Level :application.relevant_Education_Level,
        relevant_Experience_Level :application.relevant_Experience_Level,
        creation_Date:application.creation_Date,
        is_Active : false,
      };
      this.appservice.update(id,data).subscribe({
      next: (res) => {
        console.log(res);
        this.getshortlist();
        this.getapplications();
      },
      error: (e) => console.error(e)
    });
  }
}
exists(name:String,set:User_skill_set[]):boolean{
  var exist=false;
  var i=0;
  while((!exist)&&(i<set.length))
  {
    if (set[i].id_Skill.skill_Name==name)
    {
      exist=true;
      this.existinguserset=set[i];
    }
    else i=i+1;
  }
  return exist;
}
getjob_set(){
  console.log(this.viewVacancy.id_Opening);
  this.jobsetservice.getspecific(this.viewVacancy.id_Opening)
      .subscribe({
        next: (data) => {
          this.jobskillset=data;
          console.log(this.jobskillset);
        },
        error: (e) => console.error(e)
      });
}
getcompatibility(jobset:Job_skill_set[],userset:User_skill_set[]):number
{
  var compatibility=0;
  for(let jobskill of jobset)
  {
    if(this.exists(jobskill.id_Skill.skill_Name,userset))
    {
      if(this.existinguserset.level>=jobskill.level)
       compatibility=+1; 
    }
  }
  return compatibility/((jobset.length)-1);
}
createshortlist()
{
    if(confirm("Are you sure to filter the applications for vacancy number"+this.viewVacancy.id_Opening))
    {
  this.getjob_set();
  for (let app of this.dataSource)
  {
    if(app.relevant_Education_Level>=this.viewVacancy.relevant_Education_Level)
    {
      if(app.relevant_Experience_Level>=this.viewVacancy.relevant_Experience_Level)
      {
          this.usersetservice.getspecific(app.id_User.id_user)
              .subscribe({
                next: (data) => {
                  this.userskillset=data;
                  console.log(this.userskillset);
                  var compatibility = this.getcompatibility(this.jobskillset,this.userskillset);
                  if (compatibility>=0.75)
                  {
                    const data = {
                      status : "Shortlist",
                      id_User : app.id_User,
                      id_Opening : app.id_Opening,
                      gender :app.gender,
                      relevant_Education_Level :app.relevant_Education_Level,
                      relevant_Experience_Level :app.relevant_Experience_Level,
                      creation_Date:app.creation_Date,
                      is_Active : false,
                    };
                    this.appservice.update(app.id_Application,data).subscribe({
                    next: (res) => {
                      console.log(res);
                      this.getshortlist();
                      this.getapplications();
                    },
                    error: (e) => console.error(e)
                  });

                  }
                },
                error: (e) => console.error(e)
              });
        }
      }
    }
  }
}

}

