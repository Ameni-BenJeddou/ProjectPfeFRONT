import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/Entities/Application';
import { ApplicationService } from 'src/app/services/Application/application.service';

@Component({
  selector: 'app-app-track',
  templateUrl: './app-track.component.html',
  styleUrls: ['./app-track.component.css']
})
export class AppTrackComponent implements OnInit {

  constructor(private appservice : ApplicationService) { }
  public Applications!: Application[];

  ngOnInit(): void {
    this.getApplications();

  }
  public getApplications(): void {
    this.appservice.getAll().subscribe(
      (response: Application[]) => {
        this.Applications = response;
        console.log(response);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
