import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  template: `
    <div class="button-container">
      <button
        class="button-label"
        [ngClass]="{ 'focus-button': isFocus }"
        [ngStyle]="{
          'background-color': backgroundColor,
        
          'border': border,
          'color': labelColor
        }"
      >
        <ng-container *ngIf="icon === 'star'">
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25033 5H5.64408L6.97533 0.94375C7.10033 0.46875 6.74096 0 6.25033 0H1.75033C1.37533 0 1.05658 0.278125 1.00658 0.65L0.00658056 8.15C-0.0527945 8.6 0.297206 9 0.750331 9H4.45971L3.01908 15.0781C2.90658 15.5531 3.26908 16 3.74721 16C4.00971 16 4.25971 15.8625 4.39721 15.625L9.89721 6.125C10.1878 5.62813 9.82846 5 9.25033 5Z"
              [attr.fill]="iconColor"
            />
          </svg>
        </ng-container>
        {{ label }}
      </button>
    </div>
  `,
})
export class ButtonComponent {
  @Input() label?: string = 'button label';
  @Input() labelColor?: string = '#fff';
  @Input() backgroundColor?: string;
  @Input() border?: string = '2px';
  @Input() isFocus: boolean = false;
  @Input() icon?: string = 'none';
  @Input() iconColor?: string = 'white'; // New input for icon color
}
