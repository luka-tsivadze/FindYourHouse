import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainPageDataService {
  static getData(): any {
    throw new Error('Method not implemented.');
  }
  popularPlacesData = [
    {
      imgLink: '../../assets/Imges/Header/CardImges/1.jpg',
      alt: 'New York City skyline',
      cityName: 'New York',
      properties: 203,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/2.jpg',
      alt: 'Los Angeles cityscape',
      cityName: 'Los Angeles',
      properties: 215,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/3.jpg',
      alt: 'San Francisco Golden Gate Bridge',
      cityName: 'San Francisco',
      properties: 409,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/4.jpg',
      alt: 'Atlanta city view',
      cityName: 'Atlanta',
      properties: 409,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/5.jpg',
      alt: 'Miami beach',
      cityName: 'Miami',
      properties: 145,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/6.jpg',
      alt: 'Chicago skyline',
      cityName: 'Chicago',
      properties: 112,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/7.jpg',
      alt: 'Houston cityscape',
      cityName: 'Houston',
      properties: 254,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/8.jpg',
      alt: 'Orlando city view',
      cityName: 'Orlando',
      properties: 254,
    },
  ];
  
  FeaturedProp = [  
    {
      featuredBtn: true,
      For: 'Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F1.jpg',
      alt: 'Luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 110,000',
    },
    {
      featuredBtn: false,
      For: 'Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F2.jpg',
      alt: 'Luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: false,
      For: 'Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F3.jpg',
      alt: 'Another luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: true,
      For: 'Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F4.jpg',
      alt: 'Featured luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: true,
      For: 'Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F5.jpg',
      alt: 'Featured luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: false,
      For: 'Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F6.jpg',
      alt: 'Luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
  ];
  
  DiscoverPopularPlaces = [  
    {
      featuredBtn: true,
      For: 'Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F1.jpg',
      alt: 'Luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 110,000',
    },
    {
      featuredBtn: false,
      For: 'Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F2.jpg',
      alt: 'Luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: false,
      For: 'Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F3.jpg',
      alt: 'Another luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: true,
      For: 'Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F4.jpg',
      alt: 'Featured luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: true,
      For: 'Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F5.jpg',
      alt: 'Featured luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: false,
      For: 'Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F6.jpg',
      alt: 'Luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: false,
      For: 'Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F3.jpg',
      alt: 'Another luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: true,
      For: 'Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F4.jpg',
      alt: 'Featured luxury family house villa for rent',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
    {
      featuredBtn: true,
      For: 'Sale',
      imgLink: '../../assets/Imges/Header/CardImges/F5.jpg',
      alt: 'Featured luxury family house villa for sale',
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: '$ 150,000',
    },
  ];
  staticData = {
    headerTextList: ['Plaza', 'House', 'Apartment'], // ტექსტები რომლებიც გამოიყენება მთავარი გვერდის ანიმაციაზე
  };

  WhyCards = [   //მხოლოდ 4 ელემენტისგან უნდა შედგებოდეს არც მეტი არც ნაკლები
    {
      Img: '../../assets/Imges/Header/CardImges/icons/Why1.svg',
      alt: 'Wide range of properties',
      HText: 'Wide Range Of Properties',
      PText: 'lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.',
    },
    {
      Img: '../../assets/Imges/Header/CardImges/icons/Why2.svg',
      alt: 'Placeholder image 1',
      HText: 'Trusted by thousands',
      PText: 'lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.',
    },
    {
      Img: '../../assets/Imges/Header/CardImges/icons/Why3.svg',
      alt: 'Placeholder image 2',
      HText: 'Financing made easy',
      PText: 'lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.',
    },
    {
      Img: '../../assets/Imges/Header/CardImges/icons/Why4.svg',
      alt: 'Placeholder image 3',
      HText: 'We are here near you',
      PText: 'lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.',
    },
  ];
  AgentsInfo=[{imgLink:'../../assets/Imges/Header/CardImges/A-1.jpg',Name:'Carls Jhons', status:'Real Estate Agent',mainalt:'' ,sociaslLinks:[
    {alt:'facebook' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/icons8-facebook.svg' },
    {alt:'twitter' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg' },{alt:'Instagram' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/instagram.svg' },{alt:'linkdIn' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/LinkedIn.png' }] 
  },
  {imgLink:'../../assets/Imges/Header/CardImges/A-2.jpg',Name:'Arling Tracy', status:'Real Estate Agent',sociaslLinks:[
    {alt:'facebook' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/icons8-facebook.svg' },
    {alt:'twitter' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg' },
    {alt:'Instagram' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/instagram.svg' },
    {alt:'linkdIn' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/LinkedIn.png' }]}
  ,  {imgLink:'../../assets/Imges/Header/CardImges/A-3.jpg',Name:'Mark Web', status:'Real Estate Agent',sociaslLinks:[
    {alt:'facebook' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/icons8-facebook.svg' },
    {alt:'twitter' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg' },
    {alt:'Instagram' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/instagram.svg' },
    {alt:'linkdIn' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/LinkedIn.png' }]},
    {imgLink:'../../assets/Imges/Header/CardImges/A-4.jpg',Name:'Katy Grace', status:'Real Estate Agent',sociaslLinks:[
      {alt:'facebook' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/icons8-facebook.svg' },
      {alt:'twitter' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg' },
      {alt:'Instagram' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/instagram.svg' },
      {alt:'linkdIn' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/LinkedIn.png' }]},
      {imgLink:'../../assets/Imges/Header/CardImges/A-5.jpg',Name:'Chris Melo', status:'Real Estate Agent',sociaslLinks:[
        {alt:'facebook' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/icons8-facebook.svg' },
        {alt:'twitter' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg' },
        {alt:'Instagram' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/instagram.svg' },
        {alt:'linkdIn' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/LinkedIn.png' }]},
        {imgLink:'../../assets/Imges/Header/CardImges/A-6.jpg',Name:'Nina Thomas', status:'Real Estate Agent',sociaslLinks:[
          {alt:'facebook' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/icons8-facebook.svg' },
          {alt:'twitter' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg' },
          {alt:'Instagram' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/instagram.svg' },
          {alt:'linkdIn' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/LinkedIn.png' }]}
  ]
  ReviewData=[
    {Name:'Jonh Doe',imgLink:'../../assets/Imges/Header/CardImges/A-6.jpg', Place:'Houston',Review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Cristy Mayer',imgLink:'../../assets/Imges/Header/CardImges/A-5.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Mary Deshaw',imgLink:'../../assets/Imges/Header/CardImges/A-4.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Gary Steven',imgLink:'../../assets/Imges/Header/CardImges/A-3.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Luka Steven',imgLink:'../../assets/Imges/Header/CardImges/A-2.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Jonh Doe',imgLink:'../../assets/Imges/Header/CardImges/A-6.jpg', Place:'Houston',Review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Cristy Mayer',imgLink:'../../assets/Imges/Header/CardImges/A-5.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Mary Deshaw',imgLink:'../../assets/Imges/Header/CardImges/A-4.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Gary Steven',imgLink:'../../assets/Imges/Header/CardImges/A-3.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Luka Steven',imgLink:'../../assets/Imges/Header/CardImges/A-2.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Jonh Doe',imgLink:'../../assets/Imges/Header/CardImges/A-6.jpg', Place:'Houston',Review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Cristy Mayer',imgLink:'../../assets/Imges/Header/CardImges/A-5.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Mary Deshaw',imgLink:'../../assets/Imges/Header/CardImges/A-4.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Gary Steven',imgLink:'../../assets/Imges/Header/CardImges/A-3.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Luka Steven',imgLink:'../../assets/Imges/Header/CardImges/A-2.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

    ]
    constructor( private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
 
     })
    }
    

  Data() {
this.staticData
 return this.popularPlacesData;
  }
}