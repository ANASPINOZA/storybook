import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.css'],
})
export class InputComponent {
  /**
   * Size of the input: small, medium, large
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Style of the input: primary, secondary, etc.
   */
  @Input() style: 'primary' | 'secondary'| 'custom' | 'evSearchBar' = 'primary';

  /**
   * Placeholder text for the input
   */
  @Input() placeholder: string = 'Enter text';

  /**
   * Input value
   */
  @Input() value: string = '';

  @Input() borferRadius: string = '';

  @Input() 
   backgroundColor: string = '';
  @Input()
  borderWidth: string = '';

  @Input() acceptType: 'number' | 'string' = 'string';
  public get classes(): string[] {
    const inputType = this.style === 'evSearchBar' ? 'search-ev' : '';
    return [`input-${this.size}`, `input-${this.style}`, inputType];
  }

   /**
   * Validates the input value based on the acceptType
   */
  
  validateInput(value: string): boolean {
    if (this.acceptType === 'number') {
      return /^\d+$/.test(value);
    }
    return true; // For 'string', everything is valid
  }

  /**
   * Handles input event to validate the value and emit changes
   */
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;

    if (!this.validateInput(this.value)) {
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '';
    }
  }
}