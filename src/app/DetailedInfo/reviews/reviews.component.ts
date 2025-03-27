import { Component, OnInit } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';
import { RegistrationService } from '../../Services/registration/registration.service';
import { ReviewsService } from '../../Services/reviews/reviews.service';
import e from 'express';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  Reviewinfo=[];
userid=this.service.userId;
  reviews='Reviews'

  constructor(private service:PropertyInformationService  ,private lang:LanguageChooserService , 
    private Registration:RegistrationService ,private reviewServ:ReviewsService) {
    this.reviews=this.lang.chosenLang.DetailedInfo.reviews;
   
           
  }
  chosenCard;
  ngOnInit(): void {
    this.service.chosenCard.subscribe((card) => {
      this.chosenCard = card;
  
    })
this.reviewServ.fetchCardReviews(this.chosenCard.id).subscribe();
this.reviewServ.cardReview$.subscribe(
  (data) => {
    console.log('review data i recieved in detail Info ',data);
    if(data){
    this.Reviewinfo=data.map((element,index)=>{
      return {
        postedimgesLinks:{isimg:false},
        ProfileimgLink: '../../../assets/Imges/NavImg/man.png',
        date: data[index].shefasebis_tarigi_dro,
        description: data[index].mesiji,
        review: data[index].shefaseba,
        name: data[index].saxeli
      };
    });
  
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
  
// ngOnDestroy(): void {
//   if (this.service.chosenCard) {
//     this.service.chosenCard.unsubscribe();
//   }
//   if (this.reviewServ.cardReview$) {
//     this.reviewServ.cardReview$.unsubscribe();
//   }
// }
}
