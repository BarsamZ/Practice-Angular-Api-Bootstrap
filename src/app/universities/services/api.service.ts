import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getsearchuniversiti(): Observable<any> {
    return this.http.get<any>('http://universities.hipolabs.com/search');
  }
}
