import { Injectable } from '@angular/core';
import { UserViewModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getDemoData(): UserViewModel[] {
    let data = [
      new UserViewModel('John Doe', 'johndoe@gmail.com'),
      new UserViewModel('Brad Traversy', 'bradtraversy@gmail.com'),
      new UserViewModel('Jane Doe', 'janedoe@gmail.com'),
      new UserViewModel('Rock Clifford', 'rockclifford@gmail.com'),
    ];

    data.forEach((value, index) => { value.userId = (index + 1) });

    return data;
  }
}
