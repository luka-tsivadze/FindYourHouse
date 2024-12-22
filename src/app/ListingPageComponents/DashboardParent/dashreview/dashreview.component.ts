import { Component } from '@angular/core';

@Component({
  selector: 'app-dashreview',
  templateUrl: './dashreview.component.html',
  styleUrl: './dashreview.component.scss'
})
export class DashreviewComponent {

  usersReview=[{
    name:'John Doe',
    time:'22 Minutes ago',
    describe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
    type:'Family House',
    img:'../../../../assets/Imges/Header/CardImges/A-4.jpg',
    stars:4

  },
  {
    name:'nina Smith',
    time:'1 h 12 Minutes ago',
    describe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
    img:'../../../../assets/Imges/Header/CardImges/A-3.jpg',
    type:'Apartment',
    stars:2

  },
  {
    name:'William Anderson',
    time:'5 h 12 Minutes ago',
    describe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
    img:'../../../../assets/Imges/Header/CardImges/A-1.jpg',
    type:'Apartment',
    stars:5

  }


]

  
  getStarArray(review: number): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
  }
}
