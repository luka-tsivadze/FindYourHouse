import { Component, OnInit } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';
import { RegistrationService } from '../../Services/registration/registration.service';
import { ReviewsService } from '../../Services/reviews/reviews.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  Reviewinfo=this.service.chosenCard.Reviews;
userid=this.service.userId;
  reviews='Reviews'

  constructor(private service:PropertyInformationService  ,private lang:LanguageChooserService , 
    private Registration:RegistrationService ,private reviewServ:ReviewsService) {
    this.reviews=this.lang.chosenLang.DetailedInfo.reviews;
   
           
  }
  ngOnInit(): void {
this.reviewServ.fetchCardReviews(this.service.chosenCard.id).subscribe(
  (data) => {
    console.log('review data i recieved in detail Info ',data);
    if(data){
    // this.Reviewinfo=data;
    console.log('review data i recieved in detail Info 2 ',this.Reviewinfo);
    }
  }
);
  }


  getStarArray(review: number): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
  }
  showRegisterForm(){
       this.Registration.setDisplayer(true);
       window.document.body.style.overflow = "hidden";
  }
}
