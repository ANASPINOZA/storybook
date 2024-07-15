import { Component } from '@angular/core';
// import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'storybook-date-input',
  templateUrl: './date.input.component.html',
  styleUrls: ['./date.input.component.css'],
  // standalone : true
})
export class DateInputComponent {

date: any = '';

// constructor(private cdr: ChangeDetectorRef) {}
isValidDate(dateStr: string) { 
 if(dateStr.trim().length > 0){
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
  if (dateFormat.test(dateStr)) {
    const [year, month, day] = dateStr.split('-').map(Number);
    if (year < 1930 || year > 2190) {
     return false;
    }
    if (month < 1 || month > 12){
      return false;
    }
   const daysInMonth = new Date(year, month, 0).getDate();
   if (day < 1 || day > daysInMonth) {
     return false;
   }
   return true;
}
  return false;  
 } 
 return null;
}

myvar = 'Invalid date';
othervar = 'Valid date';

updateDate(event: Event) {
 const selectedDate = (event.target as HTMLInputElement).value;
  if (selectedDate !== null) {
   this.date = selectedDate;
  //  this.cdr.detectChanges();
  
  }
}
}


