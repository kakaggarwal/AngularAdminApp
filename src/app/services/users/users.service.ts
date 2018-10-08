import { Injectable } from '@angular/core';
import { UserViewModel } from '../../models/user.model';
import { Observable, of } from 'rxjs';
import { appDemoData } from '../../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private demoData = appDemoData.users;

  constructor() { }

  getUsers(): Observable<UserViewModel[]> {
    return of(this.demoData);
  }
}
