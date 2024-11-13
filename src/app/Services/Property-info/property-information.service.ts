import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyInformationService {
  
  chosenCard={
      featuredBtn: true,
      For: 'For Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F1.jpg',
      alt: 'Luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 110,000',
      profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-4.jpg',
      profileName: 'john Doe',
      uploadmonth: 2,
      id:0,
      img:['../../../assets/Imges/StaticImg/CardImges/fp-5.jpg','../../../assets/Imges/StaticImg/CardImges/fp-1.jpg',
        '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg','../../../assets/Imges/StaticImg/CardImges/fp-4.jpg'],
        describtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero luctus tincidunt. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero'
  }
  
  constructor() { }
}
