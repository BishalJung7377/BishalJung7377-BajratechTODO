import { map } from 'rxjs/operators';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  // Creating List 

  createList(ListName:string): Observable<any>{
    return this.http.post(`${environment.baseUrl}/NewList`,
    {
      ListName:ListName
    })
  
  }

  // display list  task 

  displayList(){
    return this.http.get(`${environment.baseUrl}/NewList`);
  }

}
