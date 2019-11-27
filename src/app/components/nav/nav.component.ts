import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentRoute: string;
  username: string = 'John';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'account_circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-account_circle-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'exit_to_app',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-exit_to_app-24px.svg')
    );
    iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-settings-20px.svg')
    );
    iconRegistry.addSvgIcon(
      'person',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-person-24px.svg')
    );

  }

  ngOnInit() {
    this.currentRoute = location.pathname.split('/')[0];
  }

}
