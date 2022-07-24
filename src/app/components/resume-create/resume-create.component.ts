import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/Entities/Skills';
import { User } from 'src/app/Entities/User';
import { AccountService } from 'src/app/services/Account/account.service';
import { EducationDetailsService } from 'src/app/services/education/education-details.service';
import { ExperienceDetailsService } from 'src/app/services/experience/experience-details.service';
import { SkillService } from 'src/app/services/skill/skill.service';
import { UserService } from 'src/app/services/User/user.service';
import { UserSkillSetService } from 'src/app/services/user_skills/user-skill-set.service';

@Component({
  selector: 'app-resume-create',
  templateUrl: './resume-create.component.html',
  styleUrls: ['./resume-create.component.css']
})
export class ResumeCreateComponent implements OnInit {
  addeduser :User;
  skills: Skills[];
  form: any = {
    firstName: null,
    lastName: null,
    date_Birth: null,
    region: null,
    phone_Number: null,
    gender: null,
    work_Status: null,
    email_Notification_Active: null,
    id_Account: null,
  };
  form2: any = {
    institute: null,
    degree: null,
    startdate: null,
    enddate: null,
    current: null,
    major: null,
  };
  form3: any = {
    company_Name: null,
    post: null,
    start_Date: null,
    end_Date: null,
    current: null,
    description: null,
  };
  succesfuladd=false;
  submitted = false;
  basicinfo=true;
  educinfo=false;
  expinfo=false;
  skillinfo=false;
  forward=false;
  constructor(private accountservice:AccountService ,private userservice: UserService,
     private educservice : EducationDetailsService , private expservice:ExperienceDetailsService,
     private skillsetservice :UserSkillSetService, private skillservice : SkillService) { }

  ngOnInit(): void {
    this.getskills();
  }
  onAddUser_info(): void {
    this.accountservice.get(19).subscribe({
      next: (account) => {
        if (this.form.gender=="Female")
        this.form.gender=true;
        else this.form.gender=false;
        if (this.form.work_Status=="Yes")
        this.form.work_Status=true;
        else this.form.work_Status=false;
        if (this.form.email_Notification_Active=="accept")
        this.form.email_Notification_Active=true;
        else this.form.email_Notification_Active=false;
      const data ={
        id_account:account,
        firstName:this.form.firstName,
        lastName:this.form.lastName,
        date_birth:this.form.date_Birth,
        region:this.form.region,
        phone_number:this.form.phone_Number,
        gender:this.form.gender,
        work_status:this.form.work_Status,
        email_notification_active:this.form.email_Notification_Active
      };
      this.userservice.create(data).subscribe({
        next: (res) => {
          console.log(res);
          this.addeduser=res;
          this.submitted = true;
          this.basicinfo=false;
          this.educinfo=true;
        },
        error: (e) => console.error(e)
      });
    },
    error: (e) => console.error(e)
      }
    );
 
}
onAddEducation_info(): void {
  if (this.form2.current=="current")
  this.form2.current=true;
  else this.form2.current=false;
  console.log(this.form2.current);
  const data ={
    institute:this.form2.institute,
    degree_name:this.form2.degree,
    start_date:this.form2.startdate,
    end_date:this.form2.enddate,
    is_current:this.form2.current,
    major:this.form2.major,
    id_User:this.addeduser,
   };
  this.educservice.create(data).subscribe({
    next: (res) => {
      console.log(res);
      this.submitted = true;
      this.form2 = {
        institute: null,
        degree: null,
        startdate: null,
        enddate: null,
        current: null,
        major: null,
      };
     

    },
    error: (e) => console.error(e)
  });
}
Goexp(): void{
  this.educinfo=false;
      this.expinfo=true;
      this.succesfuladd=false;
}

onAddExperience_info(): void {
  if (this.form3.current=="current")
  this.form3.current=true;
  else this.form3.current=false;
  const data ={
    company_name:this.form3.company_Name,
    post:this.form3.post,
    start_date:this.form3.start_Date,
    end_date:this.form3.end_Date,
    is_current:this.form3.current,
    description:this.form3.description,
    id_User:this.addeduser,
   };
  this.expservice.create(data).subscribe({
    next: (res) => {
      console.log(res);
      this.submitted = true;
      this.form3 = {
        company_Name: null,
          post: null,
          start_Date: null,
          end_Date: null,
          current: null,
          description: null,
      };
      this.succesfuladd=true;

    },
    error: (e) => console.error(e)
  });
}
Goskill(): void{
  this.succesfuladd=false;
  this.expinfo=false;
  this.skillinfo=true;
}

onAddskillset_info(): void {
  var skill = document.getElementById("skill") as HTMLSelectElement;
  var skillid = parseInt(skill.options[skill.selectedIndex].value);
  var level = document.getElementById("level") as HTMLSelectElement;
  var leveldegree = parseInt(level.options[level.selectedIndex].text);
  this.skillservice.get(skillid).subscribe({
   next:(addedskill) =>{ const data ={
    id_User:this.addeduser,
    level:leveldegree,
    id_Skill:addedskill,
   };
  this.skillsetservice.create(data).subscribe({
    next: (res) => {
      console.log(res);
      this.submitted = true;
      this.succesfuladd=true;

    },
    error: (e) => console.error(e)
  });
},
error: (e) => console.error(e)
});
  
}
goforward(): void{
  this.succesfuladd=false;
  this.skillinfo=false;
      this.forward=true;

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
}
