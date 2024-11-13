import { Injectable } from '@angular/core';
import { profile } from 'console';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class AllCardsService {
 CardsInfo = [  
    {
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
    },
    {
      featuredBtn: true,
      For: 'For Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F4.jpg',
      alt: 'Featured luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
      profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg',
      profileName: 'Maria Williams',
      uploadmonth: 1,
      id:3
    },
    {
      featuredBtn: true,
      For: 'For Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F5.jpg',
      alt: 'Featured luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
      profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg',
      profileName: 'Maria Williams',
      uploadmonth: 6,
      id:4
    },
    {
      featuredBtn: false,
      For: 'For Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F6.jpg',
      alt: 'Luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 135,000',
      profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg',
      profileName: 'Maria Williams',
      uploadmonth: 2,
      id:5
    },
  ];
  filter={SelectInputs:[{imgLink:'../../../assets/Imges/StaticImg/StaticIcons/icons8-home-16.png',text:'Property Status', options:['For Sale','For Rent'] } , 
  {imgLink:'../../../assets/Imges/StaticImg/StaticIcons/sleeping.png',text:'Bedrooms', options:['1' ,'2' ,'3' ,'4' ,'5','6','7'] },
  {imgLink:'../../../assets/Imges/Header/CardImges/icons/bathtub.svg',text:'bathrooms', options:['1', '2' ,'3' , '4' , '5' ] }
], filteredCheckBox:[{id:'0' , label:'Air Conditioning' } , {id:'1' , label:'WiFi' },{id:'2' , label:'Swimming Pool' } ,{id:'3' , label:'TV Cable' } ,{id:'4' , label:'Central Heating' } 
  ,{id:'5' , label:'Dryer' } ,{id:'6' , label:'Laundry Room' } ,{id:'7' , label:'Microwave' } ,{id:'8' , label:'Gym' } ,{id:'9' , label:'Washer' } ,{id:'10' , label: 'Alarm' },
  {id:'11' , label:'Refrigerator' },{id:'12' , label:'Window Covering' },{id:'13' , label:'Outdoor Shower' }
   ]  }
  constructor() { }
}
