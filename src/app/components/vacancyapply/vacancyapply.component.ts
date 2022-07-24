import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/Entities/vacancy';
import { ApplicationService } from 'src/app/services/Application/application.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-vacancyapply',
  templateUrl: './vacancyapply.component.html',
  styleUrls: ['./vacancyapply.component.css']
})
export class VacancyapplyComponent implements OnInit {

  @Input() viewMode = false;

  @Input() viewedVacancy:Vacancy = {
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
form: any = {
  creation_Date:new Date(),
  relevant_Education_Level : null,
  relevant_Experience_Level : null,
  gender : null,
  status : "waiting",
  id_user : null,
  id_Opening : null,
};
  constructor(private userservice:UserService, private appservice : ApplicationService) { }

  ngOnInit(): void {
  }
  openform() : void {
    document.getElementById('form').style.display = 'block';
    document.getElementById('add').style.display = 'none';

}
dismiss(): void {
  document.getElementById('form').style.display = 'none';
  document.getElementById('add').style.display = 'block';

}
onapply (): void {
  this.userservice.get(1).subscribe({next : (res) => {
    console.log(res);
    this.form.id_user=res;
    this.form.gender=res.gender;
    const data ={  
    id_User:this.form.id_user,
      id_Opening:this.viewedVacancy,
      creation_Date:this.form.creation_Date,
      gender:this.form.gender,
      relevant_Education_Level:this.form.Relevant_Education_Level,
      relevant_Experience_Level:this.form.Relevant_Experience_Level,
      status:this.form.status,
    };
    this.appservice.create(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
  },
  error : (e) => console.error(e)
});
}
}
