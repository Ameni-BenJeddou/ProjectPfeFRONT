import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/Entities/Application';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {
  private apiServerUrl = environment.apiBaseUrl +"/User";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiServerUrl + "/GetALL_Job_Application");
  }
  getActive(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiServerUrl + "/Getactive_Job_Application");
  }
  getshortlist(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiServerUrl + "/Getshortlist_Job_Application");
  }
  getvacancyshortlist(id: any): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiServerUrl}/Getshortlistvacancy_Job_Application/${id}`);
  }
  getvacancyActive(id: any): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiServerUrl}/Getactivevacancy_Job_Application/${id}`);
  }
  get(id: any): Observable<Application> {
    return this.http.get<Application>(`${this.apiServerUrl}/Find_Job_Application/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.apiServerUrl + "/Add_Job_Application", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/Update_Job_Application/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/Delete_Job_Application/${id}`);
  }
}