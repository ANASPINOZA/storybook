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
}
