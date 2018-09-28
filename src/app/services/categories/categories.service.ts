import { Injectable } from '@angular/core';
import { CategoryViewModel } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getDemoData(): CategoryViewModel[] {
    let data = [
      new CategoryViewModel('Web Development'),
      new CategoryViewModel('Tech Gadgets'),
      new CategoryViewModel('Business'),
      new CategoryViewModel('Health & Wellness'),
    ];

    data.forEach((value, index) => { value.cateogryId = (index + 1) });

    return data;
  }
}
