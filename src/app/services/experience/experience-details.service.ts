import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience_details } from 'src/app/Entities/Experience_details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceDetailsService {

  private apiServerUrl = environment.apiBaseUrl + "/User";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Experience_details[]> {
    return this.http.get<Experience_details[]>(this.apiServerUrl + "/GetALL_Experience_details");
  }
  get(id: any): Observable<Experience_details> {
    return this.http.get<Experience_details>(`${this.apiServerUrl}/Find_Experience_details/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.apiServerUrl + "/Add_Experience_details", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/Update_Experience_details/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/Delete_Experience_details/${id}`);
  }
}
