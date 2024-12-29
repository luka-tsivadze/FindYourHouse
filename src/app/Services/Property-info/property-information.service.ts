import { Injectable, Type } from '@angular/core';
import { AllCardsService } from '../all-cards/all-cards.service';

import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyInformationService {
cardId;
  chosenCard = {
    featuredBtn: true,
    For: 'For Sale',
    videoLink:'../../../assets/Video/VID_20220810_175242.mp4',
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
    id: 0,
   latitude:  41.82143000, 
   longitude: 41.77921000,
    Rooms: 8,
    Reviews:[
      {name:'Mary Smith',date:'May 30 2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero luctus tincidunt. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero',ProfileimgLink:'/assets/Imges/Header/CardImges/A-4.jpg', review:3, postedimgesLinks:{isimg:true, imgUrl:['../../../assets/Imges/StaticImg/CardImges/fp-2.jpg','../../../assets/Imges/StaticImg/CardImges/ts-4.jpg']} },
     {name:'Lisa Williams',date:'jul 12 2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero luctus tincidunt. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero',ProfileimgLink:'/assets/Imges/Header/CardImges/A-2.jpg', review:5, postedimgesLinks:{isimg:false} },
    ],
   
   
      Amenities: ['Pool', 'Heating', 'Laundry Room', 'Fridge', 'Parking', 'Cable TV', 'Internet', 'Microwave', 'Dryer', 'barbeque', 'Lawn', 'Dish Washer'],
    img: ['../../../assets/Imges/StaticImg/CardImges/fp-5.jpg', '../../../assets/Imges/StaticImg/CardImges/fp-1.jpg',
      '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg', '../../../assets/Imges/StaticImg/CardImges/fp-4.jpg'],
    describtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero luctus tincidunt. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero'
  }
  RecentProp = [{
    img: '../../../assets/Imges/StaticImg/CardImges/fp-1.jpg',
    type: 'Family House',
    price: '$1,200,000'
  }
    , {
    img: '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg',
    type: 'Family House',
    price: '$200,000'
  },
  {
    img: '../../../assets/Imges/StaticImg/CardImges/fp-3.jpg',
    type: 'Family House',
    price: '$1,200,000'
  }
  ]
  featuredProp = [{
    img: '../../../assets/Imges/StaticImg/CardImges/fp-1.jpg',
    type: 'Family House',
    price: '$200,000',
    For: 'For Sale',
    locationCity: 'New York',
    area: '720',
    rooms: '8',
    bedrooms: '3',
  },
  {
    img: '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg',
    type: 'luxury House',
    price: '$900,000',
    For: 'For Sale',
    locationCity: 'New York',
    area: '420',
    rooms: '6',
    bedrooms: '2',
  },
  {
    img: '../../../assets/Imges/StaticImg/CardImges/fp-3.jpg',
    type: 'Family House',
    price: '$10,000',
    For: 'For Rent',
    locationCity: 'New York',
    area: '120',
    rooms: '4',
    bedrooms: '1',
  }

  ]

  nearbyProp = [[{ headerName:'Education', class: 'first', imgLink: '../../../assets/Imges/CardDetailed/Icons/mortarboard-fill.svg',//static Info in this row don't change it!!
     review: 4, name: 'Education Mandarin', distance: '15.6 km' }, { review: 3, name: "Marry's Education", distance: '11.6 km' },
  { review: 5, name: 'The Kaplan', distance: '7.6 km' }],

  [{ headerName:'Health & Medical', class: 'second', imgLink: '../../../assets/Imges/CardDetailed/Icons/doctor-svgrepo-com.svg',//static Info in this row don't change it!!
     review: 4, name: 'Natural Market', distance: '13.6 km' },{ review: 3, name: 'Food For Health', distance: '2.26 km' },
  { review: 2, name: 'A Matter of Health', distance: '0.6 km' }],

  [{  headerName:'Transportation', class: 'third', imgLink: '../../../assets/Imges/CardDetailed/Icons/car-front-fill.svg',//static Info in this row don't change it!!
     review: 5, name: 'Airport Transportation', distance: '11.36 km'},
    { review: 4, name: 'NYC Executive Limo', distance: '11.6 km' },{ review: 3, name: 'Empire Limousine', distance: '11.52 km' }],
  ]
 similarProp = [   {
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
  
},
{
  featuredBtn: false,
  For: 'For Rent',
  imgLink: '../../assets/Imges/Header/CardImges/F2.jpg',
  alt: 'Luxury family house villa for rent',
  header: 'Real Luxury Family House Villa',
  location: 'Est St, 77 - Central Park South, NYC',
  bedrooms: 6,
  bathrooms: 3,
  area: 720,
  garages: 2,
  price: '$ 150,000',
  profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg',
  profileName: 'Maria Williams',
  uploadmonth: 2,
  id:1
},
{
  featuredBtn: false,
  For: 'For Sale',
  imgLink: '../../assets/Imges/Header/CardImges/F3.jpg',
  alt: 'Another luxury family house villa for sale',
  header: 'Real Luxury Family House Villa',
  location: 'Est St, 77 - Central Park South, NYC',
  bedrooms: 6,
  bathrooms: 3,
  area: 720,
  garages: 2,
  price: '$ 150,000',
  profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-3.jpg',
  profileName: 'Martina Williams',
  uploadmonth: 4,
  id:2
},]

constructor(private route: ActivatedRoute , private allcards:AllCardsService) {


}


ngOnInit(): void {
  console.log('Full Route Snapshot:', this.route.snapshot);
  this.cardId = this.route.snapshot.paramMap.get('id');
  console.log('Extracted Card ID:', this.cardId);
  console.log('All Cards:',   this.allcards.CardsInfo[this.cardId]);
}
setCardId(cardId) {
 
 this.cardId = cardId; 
console.log('Card ID:', this.cardId);
}
}
