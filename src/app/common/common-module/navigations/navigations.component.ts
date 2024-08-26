import { Component } from '@angular/core';
import { NavigationList } from './interfaces/NavigationList';
import { Navigation } from './interfaces/Navigation';

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

  navigation: Array<NavigationList<Navigation>> = [
    {
      title: "Dashboard",
      icon: "project",
      hasChildren: false,
      link: "/dashboard",
      children: []

    },
    {
      title: "Feeds",
      icon: "reload",
      hasChildren: false,
      link: "/feeds",
      children: []

    }

    ,
    {
      title: "Manage Profile",
      icon: "user",
      hasChildren: true,
      children: [
        {
          title: "Edit Profile",
          link: ""
        },
        {
          title: "Delete Profile",
          link: ""
        }
      ]

    },

    {
      title: "Manage Blogs",
      icon: "edit",
      hasChildren: true,
      children: [
        {
          title: "Post Blog",
          link: ""
        },
        {
          title: "Edit Blog",
          link: ""
        },
        {
          title: "Blog Analytics",
          link: ""
        }
      ]

    }
  ]

}
