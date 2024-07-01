import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-textArea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textArea.component.html',
  styleUrls: ['./textArea.component.css'],
})

export class TextAreaComponent {
    // @Input() size: 'small' | 'medium' | 'large' = 'medium';
    // @Input() columns: number = 20;
    @Input()
    resize: 'none' | 'both' | 'horizontal' | 'vertical' = 'none';
}