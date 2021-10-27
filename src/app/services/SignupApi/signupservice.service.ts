import { HttpHandler, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
userData:any
  constructor(
    private http:HttpClient
  ) { }


  userSignUp(data: any) {
    return this.http.post<any>(`${environment.baseUrl}/signup`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
