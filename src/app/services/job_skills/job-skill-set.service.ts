import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job_skill_set } from 'src/app/Entities/Job_skill_set';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobSkillSetService {private apiServerUrl = environment.apiBaseUrl +"/User";

constructor(private http: HttpClient) { }

getAll(): Observable<Job_skill_set[]> {
  return this.http.get<Job_skill_set[]>(this.apiServerUrl + "/GetALL_Job_Skill_Set");
}
get(id: any): Observable<Job_skill_set> {
  return this.http.get<Job_skill_set>(`${this.apiServerUrl}/Job_Skill_Set/${id}`);
}
getspecific(id: any): Observable<Job_skill_set[]> {
  return this.http.get<Job_skill_set[]>(`${this.apiServerUrl}/Getspecificjob_skill_set/${id}`);
}
create(data: any): Observable<any> {
  return this.http.post(this.apiServerUrl + "/Add_Job_Skill_Set", data);
}
update(id: any, data: any): Observable<any> {
  return this.http.put(`${this.apiServerUrl}/Update_Job_Skill_Set/${id}`, data);
}
delete(id: any): Observable<any> {
  return this.http.delete(`${this.apiServerUrl}/Delete_Job_Skill_Set/${id}`);
}
}