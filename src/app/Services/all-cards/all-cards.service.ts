import { Injectable } from '@angular/core';

import { map, Observable, Subject } from 'rxjs';
import { text } from 'stream/consumers';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllCardsService {
  getCardsInfo() {
    throw new Error('Method not implemented.');
  }
  formValue;

  firstimg
  back_end_data;
 CardsInfo = [  
   
    {
      featuredBtn: false, //needs to be fixed
      For: 'For Rent',
      imgLink: '../../assets/Imges/Header/CardImges/F6.jpg',
      alt: 'Luxury family house villa for rent', //needs to be fixed
      header: 'Real Luxury Family House Villa',
      location: 'Est St, 77 - Central Park South, NYC',
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,//needs to be fixed
      price: '$ 135,000',
      profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg', //needs to be fixed
      profileName: 'Maria Williams', 
      uploadmonth: 2, //can be added by me
      id:5
    },
  ];
  FirstFilter={
    locations:['Tbilisi','Batumi' , 'kutaisi' , 'Rustavi','Zugdidi', 'Telavi' ,'Bakuriani','Kobuleti'],
    PropertyTpes:['Apartment','House','Commercial','Garage'],
  }
  filter = {
    SelectInputs: [
      {
        imgLink: '../../../assets/Imges/StaticImg/StaticIcons/icons8-home-16.png',
        text: 'Property Status',
        options: ['Property Status','For Sale', 'For Rent' ,'Pledge','Rented daily','Apartments Under Construction'],
        name: 'propertyStatus', // Added name
      },
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
    filteredCheckBox: [
      { id: '0', label: 'Air Conditioning', name: 'airConditioning' },
      { id: '1', label: 'WiFi', name: 'wifi' },                
      { id: '2', label: 'Swimming Pool', name: 'swimmingPool' },
      { id: '3', label: 'TV Cable', name: 'tvCable' },
      { id: '4', label: 'Central Heating', name: 'centralHeating' },
      { id: '5', label: 'Dryer', name: 'dryer' },
      { id: '6', label: 'Laundry Room', name: 'laundryRoom' },
      { id: '7', label: 'Microwave', name: 'microwave' },
      { id: '8', label: 'Gym', name: 'gym' },
      { id: '9', label: 'Washer', name: 'washer' },
      { id: '10', label: 'Alarm', name: 'alarm' },
      { id: '11', label: 'Refrigerator', name: 'refrigerator' },
      { id: '12', label: 'Window Covering', name: 'windowCovering' },
      { id: '13', label: 'Outdoor Shower', name: 'outdoorShower' },
    ],
  };
  selectedValues: { [key: string]: string } = {};

   private dataSubject = new Subject<any>(); // Replace `any` with a specific type if needed.
   data$ = this.dataSubject.asObservable(); // Observable for the components to subscribe to.
 
   private submitSubject = new Subject<void>();//for filter submit
   submit$ = this.submitSubject.asObservable();
 
   triggerSubmit() {
     this.submitSubject.next(); // Notify all listeners to submit
   }

   // Method to send data
   setData(value: boolean) {
    this.dataSubject.next(value);
  }
constructor(private http: HttpClient) { 
  this.fetchDataFromApi()

}


fetchDataFromApi(): Observable<any[]> {
  return this.http.get<any[]>('get_houses.php').pipe(
    map((data: any[]) => {
      this.back_end_data=data;
      this.CardsInfo = data.map((item: any) => {
        try {
               const images = JSON.parse(item.fotoebi);
    
            if (Array.isArray(images) && images.length > 0) {
              this.firstimg = `houses/${item.amtvirtvelis_maili}/${item.gancxadebis_saidentifikacio_kodi}/photos/${images[0]}`;
            }
          return {
            featuredBtn: item.featuredBtn,
            imgLink: this.firstimg,
            id: item.idi,
            price: item.fasi + item.fasis_valuta,
            header: item.satauri,
            location: item.misamarti,
            bedrooms: item.sadzinebeli,
            bathrooms: item.sveli_wertilebis_raodenoba,
            area: item.fartobi,
            garages: 0,
            For: item.garigebis_tipi,
            profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg',
            profileName: item.momxmareblis_saxeli,
            alt: item.satauri,
            uploadmonth:3,
          };
        } catch (error) {
          console.error('Error processing item:', item, error);
          return null; // Skip invalid items
        }
      }).filter((item) => item !== null); // Filter out invalid items

      console.log('CardsInfoChanged', this.CardsInfo);
      return this.CardsInfo;
    })
  );
}


}

// import { Injectable } from '@angular/core';

// import { map, Observable, Subject } from 'rxjs';
// import { text } from 'stream/consumers';
// import { HttpClient } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
// export class AllCardsService {
//   getCardsInfo() {
//     throw new Error('Method not implemented.');
//   }
//   firstimg
//   back_end_data;
//  CardsInfo = [  
   
//     {
//       featuredBtn: false, //needs to be fixed
//       For: 'For Rent',
//       imgLink: '../../assets/Imges/Header/CardImges/F6.jpg',
//       alt: 'Luxury family house villa for rent', //needs to be fixed
//       header: 'Real Luxury Family House Villa',
//       location: 'Est St, 77 - Central Park South, NYC',
//       bedrooms: 6,
//       bathrooms: 3,
//       area: 720,
//       garages: 2,//needs to be fixed
//       price: '$ 135,000',
//       profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg', //needs to be fixed
//       profileName: 'Maria Williams', 
//       uploadmonth: 2, //can be added by me
//       id:5
//     },
//   ];
 
//   filter={SelectInputs:[{imgLink:'../../../assets/Imges/StaticImg/StaticIcons/icons8-home-16.png',text:'Property Status', options:['For Sale','For Rent'] } , 
//   {imgLink:'../../../assets/Imges/StaticImg/StaticIcons/sleeping.png',text:'Bedrooms', options:['1' ,'2' ,'3' ,'4' ,'5','6','7'] },
//   {imgLink:'../../../assets/Imges/Header/CardImges/icons/bathtub.svg',text:'bathrooms', options:['1', '2' ,'3' , '4' , '5' ] }
// ], filteredCheckBox:[{id:'0' , label:'Air Conditioning' } , {id:'1' , label:'WiFi' },{id:'2' , label:'Swimming Pool' } ,{id:'3' , label:'TV Cable' } ,{id:'4' , label:'Central Heating' } 
//   ,{id:'5' , label:'Dryer' } ,{id:'6' , label:'Laundry Room' } ,{id:'7' , label:'Microwave' } ,{id:'8' , label:'Gym' } ,{id:'9' , label:'Washer' } ,{id:'10' , label: 'Alarm' },
//   {id:'11' , label:'Refrigerator' },{id:'12' , label:'Window Covering' },{id:'13' , label:'Outdoor Shower' }
//    ]  }

//    private dataSubject = new Subject<any>(); // Replace `any` with a specific type if needed.
//    data$ = this.dataSubject.asObservable(); // Observable for the components to subscribe to.
 
//    // Method to send data
//    setData(value: boolean) {
//     this.dataSubject.next(value);
//   }
// constructor(private http: HttpClient) { 
//   this.fetchDataFromApi()
// }

// fetchDataFromApi(): Observable<any[]> {
//   if (!this.back_end_data) { // Fetch only if data hasn't been loaded yet
//     this.http.get<any[]>('get_houses.php').pipe(
//       map((data: any[]) => {
//         this.back_end_data = data; // Cache the fetched data
//         this.CardsInfo = data.map((item: any) => {
//           try {
//             const images = JSON.parse(item.fotoebi);

//             if (Array.isArray(images) && images.length > 0) {
//               this.firstimg = `houses/${item.amtvirtvelis_maili}/${item.gancxadebis_saidentifikacio_kodi}/photos/${images[0]}`;
//             }
//             return {
//               featuredBtn: item.featuredBtn,
//               imgLink: this.firstimg,
//               id: item.idi,
//               price: item.fasi + item.fasis_valuta,
//               header: item.satauri,
//               location: item.misamarti,
//               bedrooms: item.sadzinebeli,
//               bathrooms: item.sveli_wertilebis_raodenoba,
//               area: item.fartobi,
//               garages: 0,
//               For: item.garigebis_tipi,
//               profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg',
//               profileName: item.momxmareblis_saxeli,
//               alt: item.satauri,
//               uploadmonth: 3,
//             };
//           } catch (error) {
//             console.error('Error processing item:', item, error);
//             return null; // Skip invalid items
//           }
//         }).filter((item) => item !== null); // Filter out invalid items

//         console.log('CardsInfoChanged', this.CardsInfo);
//         this.dataSubject.next(this.CardsInfo); // Emit the processed data
//         return this.CardsInfo;
//       })
//     ).subscribe(); // Trigger the API call
//   }
//   return this.data$; // Return the shared observable for components
// }



// }
