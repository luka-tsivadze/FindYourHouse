import { Injectable, Type } from '@angular/core';
import { AllCardsService } from '../all-cards/all-cards.service';

import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyInformationService {
cardId;
  chosenCard = {
    featuredBtn: true,
    For: 'For Sale',
    Nomeri:'',
    email:'',
    videoLink:'../../../assets/Video/VID_20220810_175242.mp4',
    Type: 'Villa',
    imgLink: '../../assets/Imges/Header/CardImges/F1.j',
    alt: 'Luxury family house villa for sale',
    header: 'Real Luxury Family House Villa',
    location: 'Est St, 77 - Central Park South, NYC',
    bedrooms: 6,
    bathrooms: 3,
    purePrice:'50',
    currency:'$',
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
      {name:'Mary Smith',date:'May 30 2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero luctus tincidunt. Nulla convallis pulvinar vestibulum. Donec sed ligula sit amet felis. Sed sed erat ut libero',ProfileimgLink:'/assets/Imges/Header/CardImges/A-4.jpg', review:3, postedimgesLinks:{isimg:false, imgUrl:[]} },
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
alldata;
video;
videoLin;
floorimgLink;
userId;
constructor(private route: ActivatedRoute , private allcards:AllCardsService, private http:HttpClient) {

  if(localStorage.getItem('id')){
    this.userId = localStorage.getItem('id');
  }
 
this.getuserReview(this.userId);
}



getuserReview(momxmareblis_id: string) {
  const params = new HttpParams().set('momxmareblis_id', momxmareblis_id);

  this.http.get<any>('get-reviews.php', { params })
    .subscribe({
      next: (data) => { console.log('User Reviews:', data); },
      error: (error) => { console.error('Error fetching user reviews:', error); }
    });
}


setCardId(cardId: number) {
  this.cardId = cardId;

  // Find the selected card from the backend data
  const selectedCard = this.allcards.back_end_data.find((card) => card.idi == this.cardId);

const images = JSON.parse(selectedCard.fotoebi);

try {
  this.floorimg = selectedCard.binis_naxazi 
    ? JSON.parse(selectedCard.binis_naxazi) 
    : false;

} catch (error) {
  console.error("Invalid JSON in binis_naxazi:", error);
  this.floorimg = false;
}


try {
  this.video = JSON.parse(selectedCard.video) || false;
} catch (e) {
  this.video = false;
}
if (Array.isArray(images) && images.length > 0) {
  this.imgLink = [];
  for (let i = 0; i < images.length; i++) {
    this.imgLink.push(`houses/${selectedCard.amtvirtvelis_maili}/${selectedCard.gancxadebis_saidentifikacio_kodi}/photos/${images[i]}`);
  }
}
  this.floorimgLink=`houses/${selectedCard.amtvirtvelis_maili}/${selectedCard.gancxadebis_saidentifikacio_kodi}/blueprints/${this.floorimg[0]}`;
  this.videoLin = this.video?.length > 0 
  ? `houses/${selectedCard.amtvirtvelis_maili}/${selectedCard.gancxadebis_saidentifikacio_kodi}/video/${this.video[0]}`
  : null;


  if (selectedCard) {
    // Transform the backend data into the desired format for chosenCard
    console.log('Selected card:', selectedCard);
    this.chosenCard = {
      featuredBtn: true, // Static value as per requirements
      For: selectedCard.garigebis_tipi || 'Unknown',
      email: selectedCard.amtvirtvelis_maili || 'Unknown',
      price: selectedCard.fasi + selectedCard.fasis_valuta || 'Price Unavailable',
      currency: selectedCard.fasis_valuta || '$',
      purePrice:selectedCard.fasi, Type: selectedCard.tipi || 'Unknown',
      imgLink: this.imgLink[0] || 'No Image',
      alt: selectedCard.satauri || 'No Title',
      header: selectedCard.satauri || 'No Title',
      location: selectedCard.misamarti || 'Unknown Location',
      bedrooms: parseInt(selectedCard.sadzinebeli) || 0,
      bathrooms: parseInt(selectedCard.sveli_wertilebis_raodenoba) || 0,
      area: parseInt(selectedCard.fartobi) || 0,
     Nomeri:selectedCard.telefonis_nomeri || 'Unknown',
      garages: 0, // Static value
  
      profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-4.jpg', // Static placeholder
      profileName: selectedCard.momxmareblis_saxeli || 'Unknown',
      uploadmonth: new Date(selectedCard.statusis_gaaqtiurebis_tarigi).getMonth() + 1 || 1,
    
      YearBuilt: new Date(
        new Date(selectedCard.gancxadebis_atvirtvis_tarigi).setFullYear(
          new Date(selectedCard.gancxadebis_atvirtvis_tarigi).getFullYear() -
          this.extractYears(selectedCard.asaki )) ).toISOString().split('T')[0],
      id: parseInt(selectedCard.idi),
      latitude:  selectedCard.mapis_grdzedi, // Static placeholder
      longitude: selectedCard.mapis_ganedi, // Static placeholder
      Rooms: parseInt(selectedCard.otaxebis_raodenoba) || 0,
      Reviews: [], // Placeholder
      Amenities: [],
      img: this.imgLink,
      floorPlan: this.floorimgLink || false, // Static placeholder
      videoLink: this.videoLin || false, // Static placeholder
      describtion: selectedCard.mokle_agwera, 
    };

    // Populate Amenities based on boolean fields
    const language = localStorage.getItem('Language') || 'ENG';

    const amenitiesMap: { [key: string]: { ENG: string; GEO?: string; RUS?: string } } = {
      aivani: { ENG: 'Balcony', GEO: 'აივანი', RUS: 'Балкон' },
      kondincioneri: { ENG: 'Air Conditioning' , GEO:'კონდინციონერი', RUS: 'Кондиционер' },
      mikrotalguri: { ENG: 'Microwave', GEO:'მიკროტალღური ღუმელი', RUS: 'Микроволновая печь' },
      televiziai_wifi: { ENG: 'WiFi & TV'  },
      sacurao_auzi: { ENG: 'Swimming Pool',GEO:'საცურაო აუზი', RUS: 'Бассейн' },
      sportuli_darbazi: { ENG: 'Gym' ,GEO:'სპორტული დარბაზი', RUS: 'Спортивный зал' },
      signalizacia: { ENG: 'Security System', GEO:'სიგნალიზაცია', RUS: 'Сигнализация' },
      macivari: { ENG: 'Refrigerator', GEO:'მაცივარი', RUS: 'Холодильник' },
      samrecxao_otaxi: { ENG: 'Laundry Room', GEO:'სამრეცხაო ოთახი', RUS: 'Прачечная' },
      centrluri_gatboba: { ENG: 'Central Heating', GEO:'ცენტრალური გათბობა', RUS: 'Центральное отопление' }, //need back-end helpo
    };
    
    Object.keys(amenitiesMap).forEach(key => {
      if (selectedCard[key] === "true" || selectedCard[key] === true) {
        this.chosenCard.Amenities.push(amenitiesMap[key][language] || amenitiesMap[key].ENG);
      }
    });
    
    
    
    // Log the transformed card for debugging

  } else {
    console.error('No card found with the given ID:', this.cardId);
  }
}
extractYears(rangeStr: string): number {
  const regex = /\d+-(\d+)/; // Match number range "0-15"
  const match = rangeStr.match(regex);

  if (match && match[1]) {
    return parseInt(match[1], 10); // Extract and return the second number
  } else {
    throw new Error('Invalid range string format'); // Handle invalid input gracefully
  }
}

}
