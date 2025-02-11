import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { FormControl } from '@angular/forms';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';
import { RegistrationService } from '../../Services/registration/registration.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  Reviewinfo=this.service.chosenCard.Reviews;
userid=this.service.userId;
  reviews='Reviews'

  constructor(private service:PropertyInformationService  ,private lang:LanguageChooserService , 
    private Registration:RegistrationService) {
    this.reviews=this.lang.chosenLang.DetailedInfo.reviews;
   
           
  }

  getStarArray(review: number): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
  }
  showRegisterForm(){
       this.Registration.setDisplayer(true);
       window.document.body.style.overflow = "hidden";
  }
}
