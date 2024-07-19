import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  template: `
  <div class="label">
    <label>{{ label }}</label>
    <ng-container *ngIf="type === 'text'">
      <input class="text" type="text" [ngStyle]="{
          'height': height,
          'border-radius': borderRadius,
          'font-size': fontSize
        }" [placeholder]="placeholder"/>
    </ng-container>
    <ng-container *ngIf="type === 'number'">
      <input class="number" type="tel" [ngStyle]="{
          'height': height,
          'border-radius': borderRadius,
          'font-size': fontSize
        }" [placeholder]="placeholder" (input)="validateNumberInput($event)" />
    </ng-container>
  </div>
  `,
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() height: string = '';
  @Input() borderRadius: string = '';
  @Input() fontSize: string = '';


  validateNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }

  
}