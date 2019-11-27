import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UsersService } from '../../services/users/users.service';
import { UserViewModel } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  searchValue: string = '';
  model: UserViewModel[] = [];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private userService: UsersService
  ) {
    iconRegistry.addSvgIcon(
      'people',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-people-24px.svg')
    );
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.model = data);
  }

}
