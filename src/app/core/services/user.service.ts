import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.reqresUrl;
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get(`${this.baseUrl}?per_page=12`)
      .pipe(
        map((usersRes: any) => usersRes.data.map(this.convertToUserModel))
      );
  }

  getUser(id: number | string): Observable<User> {
    return this.http
      .get(`${this.baseUrl}/${id}`)
      .pipe(
        map((user: any) => user.data),
        map((user: any) => this.convertToUserModel(user))
      );
  }

  convertToUserModel(obj: any): User {
    return {
      id: obj.id,
      firstName: obj.first_name,
      lastName: obj.last_name,
      email: obj.email,
      avatar: obj.avatar
    };
  }
}
