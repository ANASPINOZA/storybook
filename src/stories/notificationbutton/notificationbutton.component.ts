import { Component } from '@angular/core';

@Component({
  selector: 'app-notificationbutton',
  templateUrl: './notificationbutton.component.html',
  styleUrls: ['./notificationbutton.component.css']
})
export class NotificationbuttonComponent {
  menuOpen: boolean = false;
  notifications: string[] = ['notification 1', 'notification 2', 'notification 3'];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
