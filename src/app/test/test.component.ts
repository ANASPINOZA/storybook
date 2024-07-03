import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input()  size:string = '500px';
  
  @Input()  
  color?:string;

}
