import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() type: string = 'text';
  @Input() options: string[] = [];
  @Input() label: string = '';
  @Input() placeholder: string = '';

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    console.log(`Selected: ${option}`);
    this.isDropdownOpen = false;
  }
}
