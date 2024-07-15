import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() backgroundColor: string = '#fa830b';
  @Input() Color?: string;
  @Input() borderColor?: string;
  @Input() LabelColor?: string;
  @Input() IconColor?: string;
  @Input() Icon?: string;
  @Input() label?: string;
}
