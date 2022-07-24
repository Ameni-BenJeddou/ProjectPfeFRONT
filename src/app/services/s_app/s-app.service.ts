import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spontaneaous_application } from 'src/app/Entities/Spontaneous_application';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SAppService { 
  private apiServerUrl = environment.apiBaseUrl +"/User";

constructor(private http: HttpClient) { }

getAll(): Observable<Spontaneaous_application[]> {
  return this.http.get<Spontaneaous_application[]>(this.apiServerUrl + "/GetALL_S_application");
}
get(id: any): Observable<Spontaneaous_application> {
  return this.http.get<Spontaneaous_application>(`${this.apiServerUrl}/Find_S_application/${id}`);
}
create(data: any): Observable<any> {
  return this.http.post(this.apiServerUrl + "/Add_S_Application", data);
}
update(id: any, data: any): Observable<any> {
  return this.http.put(`${this.apiServerUrl}/Update_S_application/${id}`, data);
}
delete(id: any): Observable<any> {
  return this.http.delete(`${this.apiServerUrl}/Delete_S_application/${id}`);
}
}
