import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  Reviewinfo=this.service.chosenCard.Reviews;

  constructor(private service:PropertyInformationService) { }

  getStarArray(review: number): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
  }
  
}
