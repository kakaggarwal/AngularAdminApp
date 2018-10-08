import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoriesService } from '../../services/categories/categories.service';
import { CategoryViewModel } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  searchValue: string = '';

  model: CategoryViewModel[] = [];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private categoryService: CategoriesService
  ) {
    iconRegistry.addSvgIcon(
      'folder',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-folder-24px.svg')
    );
  }

  ngOnInit() {
    this.categoryService.getCategoriesView().subscribe(data => {
      this.model = data;
    });
  }

}
