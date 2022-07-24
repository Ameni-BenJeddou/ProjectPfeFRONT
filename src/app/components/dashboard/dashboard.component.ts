import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  agechart :any =[];
  genderchart: any=[];
  status : any=[];
  type: any=[];
  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
    
  this.agechart=this.dashboardservice.agechart();
  this.genderchart=this.dashboardservice.genderchart();
  this.status=this.dashboardservice.Statuschart();
  this.type=this.dashboardservice.Typechart();
  }


}
