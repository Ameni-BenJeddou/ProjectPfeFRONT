import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/Entities/Application';
import { ApplicationService } from 'src/app/services/Application/application.service';

@Component({
  selector: 'app-admin-application-consult',
  templateUrl: './admin-application-consult.component.html',
  styleUrls: ['./admin-application-consult.component.css']
})
export class AdminApplicationConsultComponent implements OnInit {
  public dataSource : Application[] = [];
  public shortdataSource : Application[] = [];

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

  constructor(private appservice:ApplicationService) { }

  ngOnInit(): void {
    this.getshortlist();
    this.getapplications();
  }
  setActiveApplication(application: Application, index: number): void {
    this.currentapp= application;
    this.currentIndex = index;
  }
  getapplications () {
    this.appservice.getActive()
      .subscribe({
        next: (data) => {
          this.dataSource=data;
          console.log(this.dataSource);
        },
        error: (e) => console.error(e)
      });
  }
  getshortlist () {
    this.appservice.getshortlist()
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
}
