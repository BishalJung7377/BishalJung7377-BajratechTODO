import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {


  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { }

  // User login service 

  userLogin(email:string, password: string): Observable<any>{
    return this.http.post(`https://reqres.in/api/login`,
    {
      email: email,
      password: password
    })
  
  }
}
