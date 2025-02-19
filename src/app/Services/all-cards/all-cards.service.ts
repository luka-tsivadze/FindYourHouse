import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject, map, Observable, of, shareReplay, Subject, switchMap, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { EngService } from '../Languages/eng/eng.service';
import { GeoService } from '../Languages/geo/geo.service';
import { RusService } from '../Languages/rus/rus.service';





@Injectable({
  providedIn: 'root'
})
export class AllCardsService  {

  formValue;
  firstimg
  back_end_data;
 CardsInfo = [  
  ];
  FirstFilter={
    locations:['Tbilisi','Batumi' , 'kutaisi' , 'Rustavi','Zugdidi', 'Telavi' ,'Bakuriani','Kobuleti'],
    locationDis:['Tbilisi','Batumi' , 'kutaisi' , 'Rustavi','Zugdidi', 'Telavi' ,'Bakuriani','Kobuleti'],
   
    PropertyTypes:['Apartment','House','Commercial','Garage'],
    PropertyTypesDis:['Apartment','House','Commercial','Garage']
  }
  filter = {
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
    range:{
      area:'Area Size',
      MAmount:'sq M',
     Price:'Price Range'
    },
  };
  selectedValues: { [key: string]: string } = {};

   private dataSubject = new Subject<any>(); // Replace `any` with a specific type if needed.
   data$ = this.dataSubject.asObservable(); // Observable for the components to subscribe to.
   private apiResponse$: Observable<any[]>; 
   private submitSubject = new Subject<void>();//for filter submit
   submit$ = this.submitSubject.asObservable();
   localStorage;
   chosenLang;
   triggerSubmit() {
     this.submitSubject.next(); // Notify all listeners to submit
        }

  

   // Method to send data
   setData(value: boolean) {
    this.dataSubject.next(value);
  }
constructor(private http: HttpClient , private eng: EngService , private Geo: GeoService , private rus: RusService) { 
  if (typeof localStorage !== 'undefined' && localStorage.getItem('Language')) {
    this.localStorage = localStorage.getItem('Language');
  }
    switch (this.localStorage) {
      case 'ENG':
        this.filter= this.eng.allFilter.filter;
        this.FirstFilter=this.eng.allFilter.FirstFilter;
        break;
      case 'GEO':
        this.filter= this.Geo.allFilter.filter;
       this.FirstFilter= this.Geo.allFilter.FirstFilter;
        break;
        
      case 'RUS':
       this.filter= this.Geo.allFilter.filter;
       this.FirstFilter= this.Geo.allFilter.FirstFilter;
        break;
        
  
    }


  this.fetchDataFromApi(); // Initialize the API call

}



getCardsInfo() {
  throw new Error('Method not implemented.');
}

fetchDataFromApi(): Observable<any[]> {
  if (!this.apiResponse$) {
    this.apiResponse$ = this.http.get<any[]>('get_houses.php').pipe(
      map((data: any[]) => {
        this.back_end_data = data;
        this.CardsInfo = data.map((item: any) => {
          try {
            const images = JSON.parse(item.fotoebi || '[]');
            const firstimg =
              Array.isArray(images) && images.length > 0
                ? `houses/${item.amtvirtvelis_maili}/${item.gancxadebis_saidentifikacio_kodi}/photos/${images[0]}`
                : null;

            return {
              featuredBtn: item.featuredBtn,
              imgLink: firstimg,
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
              momxmreblis_idi: item.amtvirtvelis_idi,
              uploadmonth: 3,
            };
          } catch (error) {
            console.error('Error processing item:', item, error);
            return null; // Skip invalid items
          }
        }).filter((item) => item !== null);

        return this.CardsInfo;
      }),
      tap((cards) => {
 
      }),
      shareReplay(1)
    );
  }

  // Repopulate CardsInfo even when using cached data
  this.apiResponse$.subscribe((data) => {
    this.CardsInfo = data;
  });

  return this.apiResponse$;
}
private cachedFavCards$: Observable<any[]> | null = null; // Cache variable

fetFavchData(id: number): Observable<any[]> {
  if (this.cachedFavCards$) {
    return this.cachedFavCards$; // Return cached response if available
  }

  const body = { momxmareblis_idi: id };

  this.cachedFavCards$ = this.http.post<any[]>('get-saved-houses.php', body).pipe(
    switchMap((data) => 
      this.fetchDataFromApi().pipe(
        map((alldata) => {
          const fetchedIds = new Set(Object.values(data).map(fetchedel => fetchedel.gancxadebis_idi));
          return alldata.filter(element => fetchedIds.has(element.id));
        })
      )
    ),
    shareReplay(1) 
  );

  return this.cachedFavCards$;
}






}
