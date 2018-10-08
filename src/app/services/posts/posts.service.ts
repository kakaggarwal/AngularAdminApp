import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PostModel, PostViewModel, PostDetailViewModel } from '../../models/posts.model';
import { CategoriesService } from '../categories/categories.service';
import { CategoryModel } from '../../models/category.model';
import { appDemoData } from '../../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private categories: CategoryModel[];
  private demoData: PostModel[];
  
  constructor() {
    this.categories = appDemoData.categories;
    this.demoData = appDemoData.posts;
  }

  getTopPosts(): Observable<PostViewModel[]> {
    let data: PostViewModel[] = [];

    this.demoData.slice(0, 6).forEach(elem => {
      data.push(new PostViewModel(elem, this.categories.find(value => { return value.cateogryId === elem.category }).title));
    });

    return of(data);
  }

  getPosts(): Observable<PostViewModel[]> {
    let data: PostViewModel[] = [];

    this.demoData.forEach(elem => {
      data.push(new PostViewModel(elem, this.categories.find(value => { return value.cateogryId === elem.category }).title));
    });

    return of(data);
  }

  getPostDetails(postId: number): Observable<PostDetailViewModel> {
    return of(this.demoData.find(elem => elem.postId === postId));
  }
}
