import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor(private http: HttpClient) { }

  AddBucket(myObj: any): Observable<any> {
    return this.http.post("http://localhost:3000/api/bucket/addBucket", myObj)
  }

  GetBuckets(): Observable<any> {
    return this.http.get("http://localhost:3000/api/bucket/getAllBuckets")
  }

  DeleteBucket(ID: any):Observable<any>{
    return this.http.delete(`http://localhost:3000/api/bucket/deleteBucket/${ID}`)
  }

  AddDescription(OBJ:any):Observable<any>{
    return this.http.put(`http://localhost:3000/api/bucket/addDescription`, OBJ)
  }


}
