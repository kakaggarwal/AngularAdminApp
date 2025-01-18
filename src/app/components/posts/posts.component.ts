import { Component, OnInit } from '@angular/core';
import { PostViewModel } from '../../models/posts.model';
import { PostsService } from '../../services/posts/posts.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    standalone: false
})
export class PostsComponent implements OnInit {
  searchValue: string = '';
  activePage: number = 1;

  model: PostViewModel[];

  constructor(private postService: PostsService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'label',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-label-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-edit-24px.svg')
    );
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => this.model = data);
  }

  onClickGotoPage(pageId: number) {
    if (pageId > 0 && pageId < 4) {
      this.activePage = pageId;
    }
  }

}
