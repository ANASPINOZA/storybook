import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor , 'color': textColor , 'border-width': borderWidth, 'border-color': borderColor}"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  @Input()  buttonType: string = 'button';
  // buttonType = 'button'; 

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  @Input()
  textColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'small';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  @Input()
  borderWidth?: string;
  // @Input()
  // borderWidth?: number;

  @Input()
  borderColor?: string;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    console.log( " print primary " + this.primary);
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const buttonType = this.buttonType === 'EvButton' ? 'sb-button--default' : '';
    console.log( " print button Type  " + this.buttonType);
    
    return ['storybook-button', `storybook-button--${this.size}`, mode, buttonType ];
    // return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
