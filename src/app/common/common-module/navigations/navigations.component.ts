import { Component } from '@angular/core';
import { NavigationList } from './interfaces/NavigationList';
import { Navigation } from './interfaces/Navigation';
import { navigation } from './static_data/StaticData';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
  inputs: []
})
export class NavigationsComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  navigation: Array<NavigationList<Navigation>> = navigation

}
