import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  AddCard(myObj: any): Observable<any> {
    return this.http.post("http://localhost:3000/api/card/addCard", myObj)
  }

  GetCard(): Observable<any> {
    return this.http.get("http://localhost:3000/api/card/getAllCards")
  }
}
