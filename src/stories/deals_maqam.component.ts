import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals_maqam.component.html',
  styleUrls: ['./deals.css'],
})
export class dealsComponent {



@Input()
  price = '';
@Input()
  title = '';
@Input()
  location = '';
@Input()
  duration = '';
@Input()
  label = '';
  @Input()
  backgroundColor?: string;
  @Input()
  priceBackgroundColor?: string;
}