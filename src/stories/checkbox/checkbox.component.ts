import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  borderColor?: string;
  state: number = 0; // 0: unchecked, 1: checked, 2: indeterminate

  toggleState() {
    switch (this.state) {
      case 0:
        this.state = 1;
        break;
      case 1:
        this.state = 2;
        break;
      case 2:
        this.state = 0;
        break;
    }
  }

  submit() {
    if (this.state === 0) {
      this.borderColor = 'red';
      console.log('Unchecked');
    } else {
      this.borderColor = 'green';
      console.log('Checked');
    }
  }
}
