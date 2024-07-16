import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() type: string = 'text';
  @Input() options: {value: string ,label: string  }[] = [];
  @Input() label: string = '';
  @Input() placeholder: string = '';
value: string = '';

 
}
