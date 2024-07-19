import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-count',
  templateUrl: './comments-count.component.html',
  styleUrls: ['./comments-count.component.css']
})
export class CommentsCountComponent {
  commentsCount: number = 879; 
  isOpen: boolean = true;

  toggleContent() {
    this.isOpen = !this.isOpen;
  }
}
