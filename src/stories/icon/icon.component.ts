import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  template: `
    <a href="#" class="icon-card" >
      <i [ngClass]="icon" class="icon " [ngStyle]="{ color: iconColor }"></i>
      <h2 class="icon-title" [ngStyle]="{ color: labelColor }">{{ label }}</h2>
    </a>
  `,
})
export class IconComponent {
  @Input() label: string = 'Facebook';
  @Input() icon?: string ;
  // @Input() iconActions?: string ;
  @Input() iconColor: string = '#000';
  // @Input() labelColor: string = '#000';
  // @Input() iconwidth: string = '100%';
}
