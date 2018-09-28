import { Injectable } from '@angular/core';
import { PostViewModel } from '../../models/posts.model';
import { CategoriesService } from '../categories/categories.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private categoryService: CategoriesService) { }

  getDemoData(): PostViewModel[] {
    let data = [
      new PostViewModel('Post One', this.categoryService.getDemoData()[0].title, new Date(2018, 6, 12)),
      new PostViewModel('Post Two', this.categoryService.getDemoData()[1].title, new Date(2018, 6, 13)),
      new PostViewModel('Post Three', this.categoryService.getDemoData()[0].title, new Date(2018, 6, 14)),
      new PostViewModel('Post Four', this.categoryService.getDemoData()[2].title, new Date(2018, 6, 15)),
      new PostViewModel('Post Five', this.categoryService.getDemoData()[0].title, new Date(2018, 6, 16)),
      new PostViewModel('Post Six', this.categoryService.getDemoData()[3].title, new Date(2018, 6, 17)),
    ];

    data.forEach((value, index) => { value.postId = (index + 1) });

    return data;
  }
}
