import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sidenavOpened: boolean = false;
  toggleSidenav = () => this.sidenavOpened = !this.sidenavOpened;
}
