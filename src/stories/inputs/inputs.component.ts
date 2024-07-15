import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() type: 'select' | 'text' = 'text';
  @Input() options: { value: string, label: string }[] = [];
  @Input() label: string = 'Destination';
  @Input() placeholder: string = '';
  @Input() width: string = '50%';
  value: string = '';
}
