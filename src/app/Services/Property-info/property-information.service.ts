import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyInformationService {
  
  chosenCard={
      featuredBtn: true,
      For: 'For Sale',
      Type: 'Villa',
      imgLink: '../../assets/Imges/Header/CardImges/F1.jpg',
      alt: 'Luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$110,000',
      profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-4.jpg',
      profileName: 'john Doe',
      uploadmonth: 2,
      YearBuilt: '2010/06/23',
      id:0,
      Rooms: 8,
      Amenities: ['Pool', 'Heating', 'Laundry Room', 'Fridge', 'Parking', 'Cable TV','Internet','Microwave','Dryer','barbeque','Lawn','Dish Washer'],
      img:['../../../assets/Imges/StaticImg/CardImges/fp-5.jpg','../../../assets/Imges/StaticImg/CardImges/fp-1.jpg',
        '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg','../../../assets/Imges/StaticImg/CardImges/fp-4.jpg'],
        describtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero luctus tincidunt. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero'
  }
  RecentProp=[{
  img:'../../../assets/Imges/StaticImg/CardImges/fp-1.jpg',
  type:'Family House',
  price:'$1,200,000'
  }
  ,{
  img:'../../../assets/Imges/StaticImg/CardImges/fp-2.jpg',
  type:'Family House',
  price:'$200,000'
  },
  {
  img:'../../../assets/Imges/StaticImg/CardImges/fp-3.jpg',
  type:'Family House',
  price:'$1,200,000'
  }
]
featuredProp=[{
      img:'../../../assets/Imges/StaticImg/CardImges/fp-1.jpg',
      type:'Family House',
      price:'$200,000',
      For: 'For Sale',
      locationCity: 'New York',   
      area:'720', 
      rooms:'8',
      bedrooms:'3',
},
{
  img:'../../../assets/Imges/StaticImg/CardImges/fp-2.jpg',
  type:'luxury House',
  price:'$900,000',
  For: 'For Sale',
  locationCity: 'New York',
  area:'420',
  rooms:'6',
  bedrooms:'2',
},
{
  img:'../../../assets/Imges/StaticImg/CardImges/fp-3.jpg',
  type:'Family House',
  price:'$10,000',
  For: 'For Rent',
  locationCity: 'New York',
  area:'120',
  rooms:'4',
  bedrooms:'1',
}

]
  
  constructor() { }
}