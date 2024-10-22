import { Component } from '@angular/core';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrl: './my-properties.component.scss'
})
export class MyPropertiesComponent {
  allCardEl = [
    { id:1, imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-1.jpg', title: 'Luxury Villa House', review: 4, reviewedAmount:'7',  view: '163', date: '08.14.2020', location: 'Est St, 77 - Central Park South, NYC' },
    { id:2, imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-3.jpg', title: 'Modern Apartment', review: 5,  reviewedAmount:'7', view: '200', date: '09.01.2021', location: '123 Main St, Los Angeles, CA' },
    { id:3, imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-4.jpg', title: 'Cozy Cottage', review: 3,  reviewedAmount:'7', view: '120', date: '10.15.2022', location: '456 Elm St, San Francisco, CA' },
    { id:4, imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-5.jpg', title: 'Beachfront Bungalow', review: 4, reviewedAmount:'7', view: '300', date: '05.22.2023', location: '789 Ocean Blvd, Miami, FL' },
    { id:5, imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-6.jpg', title: 'Charming Townhouse', review: 2, reviewedAmount:'7', view: '80', date: '11.30.2021', location: '321 Maple Ave, Seattle, WA' },
    { id:6,  imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg', title: 'Spacious Family Home', review: 5, reviewedAmount:'7', view: '150', date: '07.10.2024', location: '135 Pine St, Chicago, IL' },
    { id:7,  imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-6.jpg', title: 'Luxurious Penthouse', review: 4, reviewedAmount:'7', view: '250', date: '02.18.2023', location: '246 Sunset Blvd, New York, NY' },
    { id:8,  imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-5.jpg', title: 'Rustic Cabin', review: 3, reviewedAmount:'7', view: '90', date: '12.01.2022', location: '321 Forest Rd, Denver, CO' },
    { id:9,  imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-4.jpg', title: 'Elegant Mansion', review: 5, reviewedAmount:'7', view: '400', date: '08.25.2023', location: '654 Luxury St, Beverly Hills, CA' },
    { id:10,  imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-3.jpg', title: 'Stylish Loft', review: 4, reviewedAmount:'7', view: '180', date: '04.17.2021', location: '789 Urban Way, Austin, TX' },
    { id:11,  imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg', title: 'Historic Villa', review: 3,  reviewedAmount:'7',view: '210', date: '03.30.2024', location: '321 Heritage Rd, Savannah, GA' },
    { id:12,  imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-1.jpg', title: 'Chic Studio', review: 4, reviewedAmount:'7', view: '95', date: '06.15.2022', location: '234 Modern St, Portland, OR' },
    { id:13,  imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-1.jpg', title: 'Chic Studio', review: 4, reviewedAmount:'7', view: '95', date: '06.15.2022', location: '234 Modern St, Portland, OR' }
  ];
  
    starObject=[{star:1},{star:2},{star:3},{star:4},{star:5}]
    pages;
    ActivePage = 0;
    index = 0;
    pagesInfo = [];
    finalInfo = [];
  activePage=[];
  reviewIndices=[]
    pageIndices=[]
    constructor() { 
  
  
    }
    ngOnInit() {
      this.pageFunction();
    }
  

 
  
    pageFunction() {
      if (this.allCardEl.length > 6) {
        console.log('No favorite properties');
       
        this.pages = Math.ceil(this.allCardEl.length / 6);
        
        for (let i = 0; i < this.pages; i++) {
          this.pageIndices.push(i);
          this.pagesInfo = []; // Reset for each page
          // Loop to add 6 items per page (or less for the last page)
          for (let j = 0; j < 6 && this.index < this.allCardEl.length; j++) {
            this.pagesInfo.push(this.allCardEl[this.index]);
            this.index++;
          }
          // Clone the pagesInfo array before resetting it
          this.finalInfo.push([...this.pagesInfo]);
        }
      this.activePage=this.finalInfo[0]
        console.log('allCardEl', this.activePage);
      }
    }
  
    getStarArray(review: number): { filled: boolean }[] {
      return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
    }
  
    chosenPage(index) {
  if(this.finalInfo[index]){
    this.activePage = this.finalInfo[index]
         console.log('index', this.activePage); 
      this.ActivePage = index;
    }
  }
  }
  
