import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable, of, shareReplay, Subject, switchMap, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AllCardsService {

  formValue;
  firstimg
  back_end_data;
 CardsInfo = [  
  ];
  FirstFilter={
    locations:['Tbilisi','Batumi' , 'kutaisi' , 'Rustavi','Zugdidi', 'Telavi' ,'Bakuriani','Kobuleti'],
    PropertyTpes:['Apartment','House','Commercial','Garage'],
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
      { id: '0', label: 'Air Conditioning', name: 'airConditioning' },
      { id: '2', label: 'Swimming Pool', name: 'swimmingPool' },
      { id: '3', label: 'TV Cable & wifi', name: 'tvCable' },
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
 
   
   private apiResponse$: Observable<any[]>; 
   private submitSubject = new Subject<void>();//for filter submit
   submit$ = this.submitSubject.asObservable();
   triggerSubmit() {
     this.submitSubject.next(); // Notify all listeners to submit
    
   }

   // Method to send data
   setData(value: boolean) {
    this.dataSubject.next(value);
  }
constructor(private http: HttpClient , ) { 
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
    shareReplay(1) // Cache response to avoid duplicate API calls
  );

  return this.cachedFavCards$;
}






}
