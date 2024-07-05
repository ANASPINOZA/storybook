import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttonstory',
  templateUrl: './buttonstory.component.html',
  styleUrls: ['./buttonstory.component.css'],
template : '<button class="button">{{label}}</button>',
})
export class ButtonstoryComponent {

@Input() label  : string = '' 
}
