import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { PostsService } from '../../services/posts/posts.service';
import { HomeViewModel } from '../../models/home.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { UsersService } from '../../services/users/users.service';
import { PostViewModel, NewPost } from '../../models/posts.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: HomeViewModel = new HomeViewModel();
  newPost: NewPost = new NewPost();

  constructor(private postService: PostsService, private categoryService: CategoriesService, private userService: UsersService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.postService.getTopPosts().subscribe(data => this.model.posts = data);

    this.postService.getPosts().subscribe(data => this.model.postCount = data.length);
    this.categoryService.getCategoriesData().subscribe(data => this.model.categoryCount = data.length);
    this.userService.getUsers().subscribe(data => this.model.userCount = data.length);
  }


  /**
   * Modal Methods
   */

  /**
   * Open Modal for Adding new Post
   * @param modal
   */
  onAddPostClick(): void {
    const dialogRef = this.dialog.open(AddPostModalComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw',
      height: 'auto',
      width: 'auto',
      autoFocus: false,
      restoreFocus: true,
      data: { newPost: this.newPost }
    });

    dialogRef.afterClosed().subscribe(modalResult => {
      console.log({ modalResult });
      this.newPost = modalResult;
    })
  }

}

/**
 * Add New Post Modal
 */
@Component({
  selector: 'app-home-addpost',
  templateUrl: './modals/addpost.modal.html'
})
export class AddPostModalComponent {

  constructor(public dialogRef: MatDialogRef<AddPostModalComponent>, @Inject(MAT_DIALOG_DATA) public data: NewPost) { }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
