import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class dropdownComponent {
  @Input() type: string = 'text';
  @Input() options: {value: string ,label: string  }[] = [];
  @Input() label: string = '';
  @Input() placeholder: string = '';
value: string = '';

 
}
