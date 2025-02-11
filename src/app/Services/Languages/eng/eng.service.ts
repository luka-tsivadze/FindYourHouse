import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EngService {

  MenuBar = {
    Home: [],
  
    Property: [],
    Pages: [ 
      { a: 'User Panel', Showimg: true,  RouterLink: '', subText: [ {text:'Dashboard',value:'Dashboard'},
        { text:'Profile',value:'Profile' }, {text:'My Properties',value:'My Properties'}, { text:'Favorited Properties',value:'Favorited Properties'} ,
         {text:'Add Property',value:'Add Property'} ,{text:'Payments',value:'Payments'},{text:'Change Password',value:'Change Password'}] },
      { a: 'Login', Showimg: false },
      { a: 'Register', Showimg: false, RouterLink: ''  },
      { a: 'About Us', Showimg: false, RouterLink: '/about' },
    ],
    Blog: [ 
      { a: 'text', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'text', Showimg: false },
      { a: 'text', Showimg: false }
    ],
    profileSettings:[{ Text:'Edit Profile', value:'Edit Profile', routes:''},{ Text:'Add Property',value:'Add Property'}
      ,{Text:'Payments', value:'Payments' },{Text:'Change Password', value:'Change Password'},{Text:'Log Out',value:'Log Out'}]
  };
  NavE = {
    Home: 'Home',
   
    Property: 'Property',
    Pages: 'Pages',
    Blog: 'Blog',
    Contact: 'contact',
    SignIn: 'SignIn',
    AddListing: 'Add Listing',
  };
  Header = {
    FindYourHouse: 'Find Your Dream ',
    weHaveOverMillion: 'We Have Over Million Property For You',
    status:['For Sale','For Rent','pledge','Rented daily','Apartments Under Construction'],
    location: 'Location',
    KayWord: 'Enter keyword..',
    propertyType: 'propertyType',
    Advanced: 'Advanced Search ',
    Search: 'Search Now',
  };
  popularPlaces = {
    Header: 'Popular Places',
    properties: 'Properties In Most Popular Places',
    prop: 'properties',
  };

  featuredPropertiesStatic = {
    Header: 'Featured Properties',
    properties: 'Properties In Most Popular Places',
    featured: 'Featured',
    For: 'For',
    BedRooms: ' Bedrooms',
    BathRooms: 'Bathrooms',
    Garage: 'Garages',
    Area: 'sq M',
    ViewDetails: 'View More',
  };
  main = {
    WhyChooseUs: 'Why Choose Us',
    everyStep: 'We provide full service at evey step ',
    popularPropertys: 'Discover popular properties',
    AgentsH: 'Meet our agents',
    AgentsP: 'Our Agents are here to help you',
    RHeader: 'Clients Testimonials',
    Rptext: 'We collect reviews from our customers.',
  };
  SFooter={headerFP:'Our Partners',pFP:'The Company That Represent Us.' , NavFooter:'Navigation', Twiter:'TwiterFeeds',NewsFooter:'Newsletters', 
    NewsFooterText:'Sign Up For Our Newsletter To Get Latest Updates And Offers. Subscribe To Receive News In Your Inbox.',NewsFooterBtn:'SUBSCRIBE',
     NewsFooterPlaceHolder:'Enter Your Email' };

     For={
    text: 'Property Status',
    optdisplay:[ 'For Rent','For Sale' ,'Pledge','Rented daily','Apartments Under Construction'],
  }
 allFilter={
  FirstFilter:{
    locations:['Tbilisi','Batumi' , 'kutaisi' , 'Rustavi','Zugdidi', 'Telavi' ,'Bakuriani','Kobuleti'],
    locationDis:['Tbilisi','Batumi' , 'kutaisi' , 'Rustavi','Zugdidi', 'Telavi' ,'Bakuriani','Kobuleti'],

    PropertyTypes:['Apartment','House','Commercial','Garage'],
    PropertyTypesDis:['Apartment','House','Commercial','Garage']
  },
  filter : {
    SelectInputs: [
         
      {
        imgLink: '../../../assets/Imges/StaticImg/StaticIcons/sleeping.png',
        text: 'Bedrooms',
        options: ['Bedrooms','1', '2', '3', '4', '5', '6', '7'],
        name: 'bedrooms',
      },
      {
        imgLink: '../../../assets/Imges/StaticImg/StaticIcons/bathtub.svg',
        text: 'Bathrooms',
        options: ['Bathrooms','1', '2', '3', '4', '5'],
        name: 'bathrooms', // Added name
      },
    ],
    range:{
      area:'Area Size',
      MAmount:'sq M',
     Price:'Price Range'
    },
    filteredCheckBox: [
      { id: '1', label: 'Air Conditioning', name: 'Air Conditioning', formcontroller:'airConditioning'},
      { id: '2', label: 'Swimming Pool', name: 'Swimming Pool', formcontroller:'swimmingPool' },
      { id: '3', label: 'TV Cable & wifi', name: 'TV Cable & wifi',  formcontroller:'tvCable' },
      { id: '4', label: 'Central Heating', name: 'Central Heating',   formcontroller:'centralHeating' },
  
      { id: '5', label: 'Laundry Room', name: 'Laundry Room',  formcontroller:'laundryRoom' },
      { id: '6', label: 'Microwave', name: 'Microwave', formcontroller:'microwave' },
      { id: '7', label: 'Gym', name: 'Gym', formcontroller:'gym' },
  
      { id: '8', label: 'Alarm', name: 'Alarm',  formcontroller:'alarm' },
      { id: '9', label: 'Refrigerator', name: 'Refrigerator',  formcontroller:'refrigerator' },
      { id: '10', label: 'Window Covering', name: 'Balcony',  formcontroller:'windowCovering' },
  
    ],

  },

 }
     
  constructor() {}
}
