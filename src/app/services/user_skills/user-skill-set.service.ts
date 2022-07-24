import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User_skill_set } from 'src/app/Entities/User_skill_set';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSkillSetService {
  private apiServerUrl = environment.apiBaseUrl +"/User";

  constructor(private http: HttpClient) { }

  getAll(): Observable<User_skill_set[]> {
    return this.http.get<User_skill_set[]>(this.apiServerUrl + "/GetALL_User_Skill_Set");
  }
  get(id: any): Observable<User_skill_set> {
    return this.http.get<User_skill_set>(`${this.apiServerUrl}/User_Skill_Set/${id}`);
  }
  getspecific(id: any): Observable<User_skill_set[]> {
    return this.http.get<User_skill_set[]>(`${this.apiServerUrl}/Getspecificuser_skill_set/${id}`);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(this.apiServerUrl + "/Add_User_Skill_Set", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/Update_User_Skill_Set/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/Delete_User_Skill_Set/${id}`);
  }
}
