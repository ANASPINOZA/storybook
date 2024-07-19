import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputsComponent {
  @Input() label: string = 'Key Words';
  @Input() type?: 'normal' |  'disabled' | 'number' ;
  @Input() placeholder: string = '';
  @Input() width: string = '50%';
  value: any;

}
