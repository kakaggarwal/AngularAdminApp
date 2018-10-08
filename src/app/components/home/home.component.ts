import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { PostsService } from '../../services/posts/posts.service';
import { HomeViewModel } from '../../models/home.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { UsersService } from '../../services/users/users.service';
import { PostViewModel } from '../../models/posts.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: HomeViewModel = new HomeViewModel();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private postService: PostsService, private categoryService: CategoriesService, private userService: UsersService) {
    iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-settings-20px.svg')
    );
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-add-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'label',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-label-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-edit-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'folder',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-folder-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'people',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-people-24px.svg')
    );
  }

  ngOnInit() {
    this.postService.getTopPosts().subscribe(data => this.model.posts = data);

    this.postService.getPosts().subscribe(data => this.model.postCount = data.length);
    this.categoryService.getCategoriesData().subscribe(data => this.model.categoryCount = data.length);
    this.userService.getUsers().subscribe(data => this.model.userCount = data.length);
  }

}
