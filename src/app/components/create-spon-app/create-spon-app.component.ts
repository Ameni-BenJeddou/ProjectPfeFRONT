import { Component, OnInit } from '@angular/core';
import { SAppService } from 'src/app/services/s_app/s-app.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-create-spon-app',
  templateUrl: './create-spon-app.component.html',
  styleUrls: ['./create-spon-app.component.css']
})
export class CreateSponAppComponent implements OnInit {
  form: any = {
    Creation_Date:new Date,
    Job_type: null,
    Id_user: null,
    Relevant_Education_Level : null,
    Relevant_Experience_Level : null,
  };
  submitted = false;

  constructor(private userservice:UserService, private sappservice : SAppService) { }

  ngOnInit(): void {
  }
  onAddS_app(): void {
    this.userservice.get(1).subscribe({next : (res) => {
      console.log(res);
      this.form.Id_user=res;
      const data ={
        job_Type:this.form.Job_type,
        creation_Date:this.form.Creation_Date,
        id_User:this.form.Id_user,
        relevant_Education_Level:this.form.Relevant_Education_Level,
        relevant_Experience_Level:this.form.Relevant_Experience_Level
      };
      this.sappservice.create(data).subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    },
    error : (e) => console.error(e)
  });
}
}
