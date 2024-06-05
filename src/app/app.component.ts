import { Component } from '@angular/core';
import {NbMenuItem, NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gedocorp';
  items: NbMenuItem[] = [
    {
      title: 'Корзина',
      link: '/cart',
      home: true
    },
    {
      title: 'Запрос',
      link: '/request'
    }
  ];
  constructor(private readonly sidebarService: NbSidebarService) {
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}
