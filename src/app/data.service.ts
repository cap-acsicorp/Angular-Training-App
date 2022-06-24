import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  testSubject$ = new BehaviorSubject<any>('data from service');
  userName$ = new BehaviorSubject<any>('');
  constructor(private http: HttpClient) { }

  setTestData(data: any){
    this.testSubject$.next(data);
  }

  setUserName(data: any){
    this.userName$.next(data);
  }

  getData(): Observable<any> {
    const baseURL = 'http://localhost:3000/data'
    return this.http.get(baseURL);
  }

  postData(param:any, id:any): Observable<any>{
    const url = 'http://localhost:3000/data/';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.post<any>(url,param,options);
  }

  updateData(param:any, id:any): Observable<any>{
    const url = 'http://localhost:3000/data/' + id;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.put<any>(url,param,options);
  }

  deleteData(id:any): Observable<any> {
    const baseURL = 'http://localhost:3000/data/' + id
    return this.http.delete(baseURL);
  }
}
