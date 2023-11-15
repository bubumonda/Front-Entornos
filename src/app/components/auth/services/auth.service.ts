import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient:HttpClient

  ) { }

  login({username,password}:any):Observable<any>{
    console.log(username, password);
    const headers= new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Access-Control-Allow-Origin','*')

    let body ={"username":username,"password": password}
    return this.httpClient.post<any>(environment.urlBack+'/auth/login',body ,
    {headers});
  }

  register({username,password,email}:any):Observable<any>
  {
    const headers= new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Access-Control-Allow-Origin','*');

    let body ={"username":username,"password": password, "email":email}
    return this.httpClient.post<any>(environment.urlBack+'/auth/register',body ,
    {headers});

  }
}
