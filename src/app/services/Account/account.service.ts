import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../../Entities/Account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiServerUrl = environment.apiBaseUrl + "/User/Account";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiServerUrl + "/GetALL_Accounts");
  }
  get(id: any): Observable<Account> {
    return this.http.get<Account>(`${this.apiServerUrl}/Find_account/${id}`);
  }
  
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/Delete_Account/${id}`);
  }
  updatepassword(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/UpdateAccount_password/${id}`, data);
  }
  updateemail(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/UpdateAccount_email/${id}`, data);
  }
}
