import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { PostsService } from '../../services/posts/posts.service';
import { HomeViewModel } from '../../models/home.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: HomeViewModel;

  constructor(iconRegsitry: MatIconRegistry, sanitizer: DomSanitizer,
    private postService: PostsService, private categoryService: CategoriesService, private userService: UsersService) {
    iconRegsitry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-settings-20px.svg')
    );
    iconRegsitry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-add-24px.svg')
    );
    iconRegsitry.addSvgIcon(
      'label',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-label-24px.svg')
    );
    iconRegsitry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-edit-24px.svg')
    );
    iconRegsitry.addSvgIcon(
      'folder',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-folder-24px.svg')
    );
    iconRegsitry.addSvgIcon(
      'people',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-people-24px.svg')
    );
  }

  ngOnInit() {
    this.model = new HomeViewModel(this.postService.getDemoData(), this.categoryService.getDemoData().length, this.userService.getDemoData().length);
  }

}
