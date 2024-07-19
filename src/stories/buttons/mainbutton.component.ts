import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mainbutton',
  templateUrl: './mainbutton.component.html',
  styleUrls: ['./mainbutton.component.css'],
})
export class MainbuttonComponent {
  @Input() label: string = '';
  @Input() width: string = '';
  @Input() labelColor: string = '';
  @Input() backgroundColor: string = '';
  @Input() icon: string | null = null;
  @Input() iconColor: string = '#fff';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() flex ?:string
  @Input() justifyContent ?:string
  @Input() alignItems ?:string
}
