import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import swal from 'sweetalert2';

import { PostsService } from '../../services/posts/posts.service';
import { PostDetailViewModel } from '../../models/posts.model';
import { CategoryModel } from '../../models/category.model';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  model: PostDetailViewModel;

  postId: number;
  categories: CategoryModel[];

  constructor(private activeRoute: ActivatedRoute, private location: Location,
    private postService: PostsService, private categoryService: CategoriesService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'keyboard_backspace',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-keyboard_backspace-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'done',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-done-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-delete-24px.svg')
    );
  }

  ngOnInit() {
    this.getPostDetails();

    this.categoryService.getCategoriesData().subscribe(data => {
      this.categories = data
    });
  }

  getPostDetails(): void {
    this.postId = +this.activeRoute.snapshot.paramMap.get('id');

    this.postService.getPostDetails(this.postId).subscribe(data => {
      this.model = data
      console.log(this.model);
    });
  }

  onClickSavePost() {
    swal({
      title: 'Please Confirm to save changes to Post',
      text: 'Do you want to save changes made to this Post?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, I Confirm!'
    }).then((result) => {
      if (result.value) {
        swal({
          title: 'Updated',
          text: `Post: \"${this.postId}\" has been saved.`,
          type: 'success',
          confirmButtonColor: '#17a2b8'
        }).then(() => this.location.back())
      }
    });
  }

  onClickDeletePost() {
    swal({
      title: 'Please Confirm to delete the Post',
      text: `You are about to delete the Post: \"${this.postId}\".`,
      type: 'error',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, I Confirm!'
    }).then((result) => {
      if (result.value) {
        swal({
          title: 'Deleted',
          text: `Post: \"${this.postId}\" has been deleted.`,
          type: 'success',
          confirmButtonColor: '#17a2b8'
        }).then(() => this.location.back())
      }
    });
  }
}
