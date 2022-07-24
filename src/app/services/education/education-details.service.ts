import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education_details } from 'src/app/Entities/Education_details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationDetailsService {

  private apiServerUrl = environment.apiBaseUrl + "/User";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Education_details[]> {
    return this.http.get<Education_details[]>(this.apiServerUrl + "/GetALL_Education_details");
  }
  get(id: any): Observable<Education_details> {
    return this.http.get<Education_details>(`${this.apiServerUrl}/Find_Education_details/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.apiServerUrl + "/Add_Education_details", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/Update_Education_details/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/Delete_Education_details/${id}`);
  }}
