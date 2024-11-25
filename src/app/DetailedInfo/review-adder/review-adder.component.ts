import { Component } from '@angular/core';

@Component({
  selector: 'app-review-adder',
  templateUrl: './review-adder.component.html',
  styleUrl: './review-adder.component.scss'
})
export class ReviewAdderComponent {
starRating = [{id:0, filled:true }, {id: 1, filled:true}, {id: 2, filled:true}, {id:3 ,filled:true},{id: 4 ,filled:true}];


rater(star){

 
      for(let i = 0; i < star; i++){
        this.starRating[i].filled = true;
      }
    console.log(this.starRating);
     for(let i = star; i < 5; i++){
        this.starRating[i].filled = false;
      }
 
  console.log(star);

  }
}

