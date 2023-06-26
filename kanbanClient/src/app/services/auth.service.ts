import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private employeesSubject = new BehaviorSubject<any[]>([]);
  employees$ = this.employeesSubject.asObservable();

  constructor(private http: HttpClient) {   }
  Register(Obj: any): Observable<any> {
    return this.http.post<any[]>('http://localhost:3000/api/auth/signup', Obj)
  }

  Signin(Obj: any): Observable<any> {
    return this.http.post<any[]>("http://localhost:3000/api/auth/signin", Obj);
  }
}
