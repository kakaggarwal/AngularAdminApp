import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CategoryViewModel, CategoryModel } from '../../models/category.model';
import { PostModel } from '../../models/posts.model';
import { appDemoData } from '../../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private posts: PostModel[];
  private demoData: CategoryModel[];

  constructor() {
    this.posts = appDemoData.posts.sort((a, b) => { return a.datePosted > b.datePosted ? 1 : a.datePosted < b.datePosted ? -1 : 0; });
    this.demoData = appDemoData.categories;
  }

  getCategoriesData(): Observable<CategoryModel[]> {
    return of(this.demoData);
  }

  getCategoriesView(): Observable<CategoryViewModel[]> {
    let data: CategoryViewModel[] = [];

    console.log(this.posts);
    
    this.demoData.forEach(elem => {
      data.push(new CategoryViewModel(elem, this.posts.find(val => val.category === elem.cateogryId).datePosted));
    });

    return of(data);
  }
}
