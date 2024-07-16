import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() label: string = 'Key Words';
  @Input() inputmode: 'numeric' | 'text' = 'text';
  @Input() type: 'normal' | 'disabled' = 'disabled';
  @Input() placeholder: string = '';
  @Input() width: string = '50%';
  value: any;
  isNumber: boolean = true;

  validateNumber() {
    if (this.inputmode === 'numeric') {
      this.isNumber = !isNaN(this.value);
    }
  }
}
