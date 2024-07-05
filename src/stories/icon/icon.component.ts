import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  template: `
    <a href="#" class="facebook-card" [ngStyle]="{ 'width': iconwidth}">
      <i [ngClass]="icon" [ngStyle]="{ 'color': iconColor,}" class="facebook-icon"></i>
      <h2 class="facebook-title" [ngStyle]="{ 'color': labelColor, }">{{ label }}</h2>
    </a>
  `,
})
export class IconComponent {
  @Input() label: string = 'facebook';
  @Input() icon: string = 'fa-brands fa-facebook-f';
  @Input() iconColor?: string;
  @Input() labelColor?: string;
  @Input() iconwidth?: string;
}
