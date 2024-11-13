import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-r',
  templateUrl: './schedule-r.component.html',
  styleUrl: './schedule-r.component.scss'
})
export class ScheduleRComponent {
  value: number = 1;  // Initial value
value2: number = 0;  // Initial value
  increment(number: number) {
   
   
      if(number === 0) {
   if(this.value < 9) {
        this.value++;
   }
      } else {
        if ( this.value2 < 9) {
          this.value2++;    
        }
        }
  

  }
  decrement(number) {
    
      if(number === 0) {
        if(this.value> 1) {
        this.value--;
        }
      } else {
        if ( this.value2 > 0) {
        this.value2--;
        }
      }
    
  }

}
