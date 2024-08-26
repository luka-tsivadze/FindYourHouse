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
      cityName: 'New York',
      properties: 203,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/2.jpg',
      cityName: 'Los Angeles',
      properties: 215,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/3.jpg',
      cityName: 'San Francisco',
      properties: 409,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/4.jpg',
      cityName: 'Atlanta',
      properties: 409,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/5.jpg',
      cityName: 'Miami',
      properties: 145,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/6.jpg',
      cityName: 'Chicago',
      properties: 112,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/7.jpg',
      cityName: 'Houston',
      properties: 254,
    },
    {
      imgLink: '../../assets/Imges/Header/CardImges/8.jpg',
      cityName: 'Orlando',
      properties: 254,
    },

  ];
  staticData = {
    headerTextList: ['Plaza', 'House', 'Apartment'],
  };


  constructor() {}

  Data() {
this.staticData
 return this.popularPlacesData;
  }
}
