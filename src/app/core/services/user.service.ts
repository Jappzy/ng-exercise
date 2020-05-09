import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.reqresUrl;
  }

  getUsers(): Observable<any[]> {
    return this.http
      .get(`${this.baseUrl}?per_page=12`, { observe: 'body' })
      .pipe(
        map((users: any) => users.data)
      );
  }

  getUser(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}`)
      .pipe(
        map((user: any) => user.data)
      );
  }
}
