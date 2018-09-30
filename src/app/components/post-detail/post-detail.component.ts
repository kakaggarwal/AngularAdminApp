import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';
import { PostViewModel } from '../../models/posts.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  model: PostViewModel;

  constructor(private activeRoute: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.getPostDetails();
  }

  getPostDetails(): void {
    const postId = +this.activeRoute.snapshot.paramMap.get('id');

    this.postService.getPostDetails(postId).subscribe(data => this.model = data);
  }

}
