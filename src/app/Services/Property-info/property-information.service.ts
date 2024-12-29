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
    imgLink: '../../assets/Imges/Header/CardImges/F1.j',
    alt: 'Luxury family house villa for sale',
    header: 'Real Luxury Family House Villa',
    location: 'Est St, 77 - Central Park South, NYC',
    bedrooms: 6,
    bathrooms: 3,
    purePrice:'50',
    area: 720,
    garages: 2,
    floorPlan: '../../../assets/Imges/StaticImg/CardImges/fp-1.jpg',
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

imgLink=[];
floorimg;
videoLin;
constructor(private route: ActivatedRoute , private allcards:AllCardsService) {


}



setCardId(cardId: number) {
  this.cardId = cardId;

  // Find the selected card from the backend data
  const selectedCard = this.allcards.back_end_data.find((card) => card.idi == this.cardId);
console.log('Selected Card:', selectedCard);
const images = JSON.parse(selectedCard.fotoebi);
const floorimg = JSON.parse(selectedCard.binis_naxazi);
const video = JSON.parse(selectedCard.video);
if (Array.isArray(images) && images.length > 0) {
  this.imgLink = [];
  for (let i = 0; i < images.length; i++) {
    this.imgLink.push(`houses/${selectedCard.amtvirtvelis_maili}/${selectedCard.gancxadebis_saidentifikacio_kodi}/photos/${images[i]}`);
  }
}
  this.floorimg=`houses/${selectedCard.amtvirtvelis_maili}/${selectedCard.gancxadebis_saidentifikacio_kodi}/blueprints/${floorimg[0]}`;
  this.videoLin=`houses/${selectedCard.amtvirtvelis_maili}/${selectedCard.gancxadebis_saidentifikacio_kodi}/video/${video[0]}`;


  if (selectedCard) {
    // Transform the backend data into the desired format for chosenCard
    this.chosenCard = {
      featuredBtn: true, // Static value as per requirements
      For: selectedCard.garigebis_tipi || 'Unknown',
      price: selectedCard.fasi + selectedCard.fasis_valuta || 'Price Unavailable',
      purePrice:selectedCard.fasi, Type: selectedCard.tipi || 'Unknown',
      imgLink: this.imgLink[0] || 'No Image',
      alt: selectedCard.satauri || 'No Title',
      header: selectedCard.satauri || 'No Title',
      location: selectedCard.misamarti || 'Unknown Location',
      bedrooms: parseInt(selectedCard.sadzinebeli) || 0,
      bathrooms: parseInt(selectedCard.sveli_wertilebis_raodenoba) || 0,
      area: parseInt(selectedCard.fartobi) || 0,
      garages: 0, // Static value

      profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-4.jpg', // Static placeholder
      profileName: selectedCard.momxmareblis_saxeli || 'Unknown',
      uploadmonth: new Date(selectedCard.statusis_gaaqtiurebis_tarigi).getMonth() + 1 || 1,
      YearBuilt: '2010/06/23', // Static placeholder
      id: parseInt(selectedCard.idi),
      latitude:  selectedCard.mapis_ganedi, // Static placeholder
      longitude: selectedCard.mapis_ganedi, // Static placeholder
      Rooms: parseInt(selectedCard.otaxebis_raodenoba) || 0,
      Reviews: [], // Placeholder
      Amenities: [],
      img: this.imgLink,
      floorPlan: this.floorimg, 
      videoLink: this.videoLin || false, // Static placeholder
      describtion: selectedCard.mokle_agwera, 
    };

    // Populate Amenities based on boolean fields
    if (selectedCard.aivani === "true" || selectedCard.aivani === true) {
      this.chosenCard.Amenities.push('Balcony');
    }
    if (selectedCard.kondincioneri === "true" || selectedCard.kondincioneri === true) {
      this.chosenCard.Amenities.push('Heating');
    }
    if (selectedCard.mikrotalguri === "true" || selectedCard.mikrotalguri === true) {
      this.chosenCard.Amenities.push('Microwave');
    }
    if (selectedCard.televizia_wifi === "true" || selectedCard.televizia_wifi === true) {
      this.chosenCard.Amenities.push('WiFi');
    }
    if (selectedCard.sacurao_auzi === "true" || selectedCard.sacurao_auzi === true) {
      this.chosenCard.Amenities.push('Swimming Pool');
    }
    if (selectedCard.sportuli_darbazi === "true" || selectedCard.sportuli_darbazi === true) {
      this.chosenCard.Amenities.push('Gym');
    }
    if (selectedCard.signalizacia === "true" || selectedCard.signalizacia === true) {
      this.chosenCard.Amenities.push('Security System');
    }

    // Log the transformed card for debugging
    console.log('Transformed chosenCard:', this.chosenCard);
  } else {
    console.error('No card found with the given ID:', this.cardId);
  }
}

}
