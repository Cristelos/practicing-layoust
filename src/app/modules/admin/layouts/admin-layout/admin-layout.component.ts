import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';

import { PfrSideMenuComponent, TitleColor } from 'pfr-side-menu';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    //SideMenuComponent,
    PfrSideMenuComponent,
  ],
  templateUrl: './admin-layout.component.html',
})
export default class AdminLayoutComponent {
  isAuthenticated = signal(false);

  TitleColor = TitleColor;

  onLogin() {
    this.isAuthenticated.set(true);
  }

  onLogout() {
    this.isAuthenticated.set(false);
  }
}
