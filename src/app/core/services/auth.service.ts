import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: BehaviorSubject<User> = new BehaviorSubject(null);
  sampleUser: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };

  constructor() {}

  login() {
    this.user$.next(this.sampleUser);
  }

  signup() {
    this.user$.next(this.sampleUser);
  }

  logout() {
    this.user$.next(null);
  }
}
