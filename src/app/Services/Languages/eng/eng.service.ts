import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EngService {
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
    Area: 'sq Ft',
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

     
     
  constructor() {}
}
