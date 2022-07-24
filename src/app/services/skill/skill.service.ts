import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/Entities/Skills';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiServerUrl = environment.apiBaseUrl + "/User";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiServerUrl + "/GetALL_Skills");
  }
  get(id: any): Observable<Skills> {
    return this.http.get<Skills>(`${this.apiServerUrl}/Find_Skill/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.apiServerUrl + "/Add_Skill", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/Update_Skill/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/Delete_Skill/${id}`);
  }
}
