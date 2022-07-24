import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacancy } from '../../Entities/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiServerUrl = environment.apiBaseUrl +"/User";

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiServerUrl + "/GetALL_Job_Opening");
  }
  getAllactive(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiServerUrl + "/GetALLactive_Job_Opening");
  }
  get(id: any): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiServerUrl}/Find_Job_Opening/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.apiServerUrl + "/Admin/Add_Job_Opening", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/Admin/Update_Job_Opening/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/Admin/Delete_Job_Opening/${id}`);
  }
}