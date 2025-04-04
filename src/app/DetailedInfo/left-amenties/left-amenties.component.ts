import { Component, OnInit } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-left-amenties',
  templateUrl: './left-amenties.component.html',
  styleUrls: ['./left-amenties.component.scss']
})
export class LeftAmentiesComponent implements OnInit {

  // Static array of property labels
 
  static={
    h2:'Property Details',
    h2a:'Amenities',
    propstatic:['Property ID', 'Property Type', 'Property Status', 'Property Price', 'Rooms', 'Bedrooms', 'Bath', 'Area', 'Year Built']
  }
  // Array to hold chosenCard values
  Infoelements: any[] = [];
  Amenties ;




  constructor(private propertyInfo: PropertyInformationService ,private lang:  LanguageChooserService) { 
    this.static = this.lang.chosenLang.DetailedInfo.leftAmenties;
    // Populate Infoelements based on chosenCard data

  }
  chosenCard;
  ngOnInit(): void {
    this.propertyInfo.chosenCard.subscribe((card) => {
      this.chosenCard = card;
      this.Amenties = card.Amenities;
    })
    const chosenCard = this.chosenCard;
    this.Infoelements = [
      chosenCard.id,
      chosenCard.For,
      chosenCard.Type,
      chosenCard.price,
      chosenCard.Rooms,
      chosenCard.bedrooms,
      chosenCard.bathrooms,
      chosenCard.area +' /sqM',
      chosenCard.YearBuilt
    ];
  }
  
}
