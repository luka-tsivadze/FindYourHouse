import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

@Component({
  selector: 'app-left-amenties',
  templateUrl: './left-amenties.component.html',
  styleUrls: ['./left-amenties.component.scss']
})
export class LeftAmentiesComponent {

  // Static array of property labels
  propstatic = ['Property ID', 'Property Type', 'Property Status', 'Property Price', 'Rooms', 'Bedrooms', 'Bath', 'Garages', 'Year Built'];
  // Array to hold chosenCard values
  Infoelements: any[] = [];
  Amenties = this.propertyInfo.chosenCard.Amenities;

  constructor(private propertyInfo: PropertyInformationService) { 
    // Populate Infoelements based on chosenCard data
    const chosenCard = this.propertyInfo.chosenCard;
    this.Infoelements = [
      chosenCard.id,
      chosenCard.For,
      chosenCard.Type,
      chosenCard.price,
      chosenCard.Rooms,
      chosenCard.bedrooms,
      chosenCard.bathrooms,
      chosenCard.garages,
      chosenCard.YearBuilt
    ];
  }
}
