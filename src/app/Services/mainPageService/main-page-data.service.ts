import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';

import { EngService } from '../Languages/eng/eng.service';
import { GeoService } from '../Languages/geo/geo.service';
import { RusService } from '../Languages/rus/rus.service';
import { AllCardsService } from '../all-cards/all-cards.service';
import { BehaviorSubject, catchError, Observable, of, ReplaySubject, shareReplay } from 'rxjs';
import { Agent } from 'http';
import { AgentsService } from '../agents/agents.service';
@Injectable({
  providedIn: 'root',
})
export class MainPageDataService {

  localStorage
  private popularPlacesSubject = new BehaviorSubject<any>([ {
    imgLink: '../../assets/Imges/Header/CardImges/Tbilisi.jpg',
    alt: 'Tbilisi City ',
    cityName: 'Tbilisi',
    properties: 203,
  },
  {
    imgLink: '../../assets/Imges/Header/CardImges/batumi.jpg',
    alt: 'Los Angeles cityscape',
    cityName: 'Batumi',
    properties: 215,
  },
  {
    imgLink: '../../assets/Imges/Header/CardImges/kutaisi.jpg',
    alt: 'kutaisi city view',
    cityName: 'Kutaisi',
    properties: 409,
  },
  {
    imgLink: '../../assets/Imges/Header/CardImges/rustavi.jpg',
    alt: 'rustavi city view',
    cityName: 'Rustavi',
    properties: 409,
  },
  {
    imgLink: '../../assets/Imges/Header/CardImges/zugdidi.jpg',
    alt: 'Zugdidi view',
    cityName: 'Zugdidi',
    properties: 145,
  },
  {
    imgLink: '../../assets/Imges/Header/CardImges/telavi.jpg',
    alt: 'telavi skyline',
    cityName: 'Telavi',
    properties: 112,
  },
  {
    imgLink: '../../assets/Imges/Header/CardImges/Bakuriani.jpg',
    alt: 'Bakurian cityscape',
    cityName: 'Bakurian',
    properties: 254,
  },
  {
    imgLink: '../../assets/Imges/Header/CardImges/kobuleti.jpg',
    alt: 'Kobuleti city view',
    cityName: 'Kobuleti',
    properties: 254,
  },]);

  popularPlacesData$ = this.popularPlacesSubject.asObservable();

  

  
  DiscoverPopularPlaces = [  
    {
      gncxdebis_idi:21,
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
    },
    {
      gncxdebis_idi:50,
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
    },

  ];

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
  AgentsInfo=[
    {imgLink:'../../assets/Imges/Header/CardImges/A-1.jpg',Name:'Carls Jhons', status:'Real Estat e Agent',mainalt:'AgentsCard' ,sociaslLinks:[
    {alt:'facebook' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/icons8-facebook.svg'},
    {alt:'twitter' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg'},
    {alt:'Instagram' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/instagram.svg' },{alt:'linkdIn' ,href:'',IconLink:'../../assets/Imges/Header/CardImges/icons/LinkedIn.png' }] 
  },

  ]
  ReviewData=[
    {Name:'Jonh Doe',imgLink:'../../assets/Imges/Header/CardImges/A-6.jpg', Place:'Houston',Review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Cristy Mayer',imgLink:'../../assets/Imges/Header/CardImges/A-5.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
     {Name:'Mary Deshaw',imgLink:'../../assets/Imges/Header/CardImges/A-4.jpg', Place:'San Francisco',Review:"Lorem ipsum dolor sit amet, consectetur rem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

    ]

//საწყისი ენის პარამეტრები
For= {
  imgLink: '../../../assets/Imges/StaticImg/StaticIcons/icons8-home-16.png',
  text: 'Property Status',
  optdisplay:[ 'For Sale','For Rent' ,'Pledge','Rented daily','Apartments Under Construction'],
  options: [ 'For Sale','For Rent','Pledge','Rented daily','Apartments Under Construction'],
  name: 'propertyStatus', // Added name
};
staticData

// = {
//   headerTextList: ['პლაზა', 'სახლი', 'ბინა'], // ტექსტები რომლებიც გამოიყენება მთავარი გვერდის ანიმაციაზე
//   staticElements:{FindYourHouse:'იპოვე შენი საოცნებო ' ,weHaveOverMillion:'ჩვენ გვაქვს უძრავი ქონების მილიონზე მეტი  არჩევანი, თქვენთვის' , status:['იყიდება','ქირავდება','გირავდება','ქირავდება დღიურად',' მშენებარე ბინები'],location:'მდებარეობა',
//     KayWord:'შეიყვანეთ საძიებო სიტყვა', propertyType:'ქონების ტიპი', Advanced:'გაფართოებული ძებნა', Search:'მოძებნა',}
// };
popularPlacesStatic
// ={Header:'პოპულარული ადგილები' ,properties:'უძრავი ქონება ყველაზე პოპულარულ ადგილებში', prop:'უძრავი ქონება'}

featuredPropertiesStatic
//  = {
//   Header: 'პოპულარული განცხადებები',
//   properties: 'ეს არის ჩვენი გამორჩეული განცხადებები',
//   featured: 'VIP',
//   For: 'იყიდება',
//   BedRooms: 'საძინებელი',
//   BathRooms: 'სააბაზანო',
//   Garage: 'ავტოფარეხი',
//   Area: 'კვ.მ',
//   ViewDetails: 'მეტის ნახვა'
// }
main;
// {WhyChooseUs:'რატომ ჩვენ', everyStep:'ჩვენ გთავაზობთ სრულ სერვისს ყოველ ნაბიჯზე ' ,popularPropertys:'აღმოაჩინე პოპულარული ქონება' , AgentsH:'შეხვდით ჩვენს აგენტებს' , 
//   AgentsP:'ჩვენ ყოველთვის მზად ვართ რომ დაგეხმაროთ' ,RHeader:'კლიენტების შეფასებები',Rptext:'ჩვენ ვაგროვებთ შეფასებებს ჩვენი მომხმარებლებისგან.'}

LangMainData;


  private featuredPropSubject = new BehaviorSubject<any[]>([]);

  constructor(

    private allcards: AllCardsService,
    private http: HttpClient,
    private agentsServ:AgentsService,
    private EngService: EngService,
    private GeoService: GeoService,
    private RusService: RusService
  ) {

   //maybe move to component
        
    
    this.allcards.fetchDataFromApi().subscribe((data) => {
      
      this.featuredPropSubject.next(data);
    });
      // Language setup logic here  
    if (typeof localStorage !== 'undefined' && localStorage.getItem('Language')) {
      this.localStorage = localStorage.getItem('Language');
      
      switch (this.localStorage) {
        case 'ENG':
          this.LangMainData = EngService
          this.For.optdisplay=EngService.For.optdisplay
          this.For.text=EngService.For.text
          this.staticData = {
            headerTextList: ['Plaza', 'House', 'Apartment'], // Texts for the main page animation
            staticElements:EngService.Header
           
          };
          this.popularPlacesStatic=EngService.popularPlaces
          this.featuredPropertiesStatic=EngService.featuredPropertiesStatic
          this.main=EngService.main
          break;
        case 'GEO':
          this.LangMainData = GeoService
          this.For.optdisplay=GeoService.For.optdisplay
          this.For.text=GeoService.For.text

          this.staticData = {
            headerTextList: ['პლაზა', 'სახლი', 'ბინა'], // Texts for the main page animation
            staticElements:GeoService.Header
          }
          this.popularPlacesStatic=GeoService.popularPlaces
          this.featuredPropertiesStatic=GeoService.featuredPropertiesStatic
          this.main=GeoService.main
          break;
          
        case 'RUS':
          this.LangMainData = RusService
          
          this.For.optdisplay=RusService.For.optdisplay
          this.For.text=RusService.For.text
          this.staticData = {
            headerTextList: ['Плаза', 'Дом', 'Квартира'], // Texts for the main page animation'
            staticElements:RusService.Header
          };
          this.popularPlacesStatic=RusService.popularPlaces
          this.main=RusService.main
          this.featuredPropertiesStatic=RusService.featuredPropertiesStatic
          break;
          
    
      }
    }
     
    }


cityCaller=true;
    cityAmount() {
      if(!this.cityCaller){
         return;
      }
      this.http.get<{ [key: string]: number }>('get-cities-counted-data.php').subscribe({
        next: (apiData) => {
          const nameMap: { [key: string]: string } = {
            "Tbilisi": "Tbilisi",
            "Batumi": "Batumi",
            "Kutaisi": "Kutaisi",
            "Rustavi": "Rustavi",
            "Zugdidi": "Zugdidi",
            "Telavi": "Telavi",
            "Bakurian": "Bakuriani", 
            "Kobuleti": "Kobuleti"
          };
    
          const updatedData = this.popularPlacesSubject.getValue().map(staticItem => ({
            ...staticItem,
            properties: apiData[nameMap[staticItem.cityName]] ?? -1 // ✅ Use correct backend key, default to -1 if missing
          }));
    
          this.popularPlacesSubject.next(updatedData);
        },
        error: (err) => console.error('Error fetching city data:', err)
      });
    }
    
    
  
    getFeaturedProperties(): Observable<any[]> {
      return this.featuredPropSubject.asObservable();
    }


  DiscoverPopularPlaces$=new BehaviorSubject<any[]>(null)
  getDiscoveredProperties(): BehaviorSubject<any[]> {
    if (this.DiscoverPopularPlaces$.getValue() !== null) {
      return this.DiscoverPopularPlaces$; // ✅ Return cached value if available
    }
  
    this.http.get<any[]>('get-popular-houses.php').pipe(
      catchError((error) => {
        console.error('Error fetching discovered properties:', error);
        console.log('Falling back to static data:', this.DiscoverPopularPlaces);
  
        this.DiscoverPopularPlaces$.next(this.DiscoverPopularPlaces); //  Use static data directly
        return of(null); 
      })
    ).subscribe((data) => {
      if (!data) return; 
  
      console.log('Discovered properties from API:', data);
  
      const transformedData = data.map((item) => {
        let images: string[] = [];
        let firstimg: string | null = null;
  
        try {
          images = JSON.parse(item.fotoebi || '[]');
          firstimg = Array.isArray(images) && images.length > 0
            ? `houses/${item.amtvirtvelis_maili}/${item.gancxadebis_saidentifikacio_kodi}/photos/${images[0]}`
            : null;
        } catch (error) {
          console.error('Invalid JSON in fotoebi:', item.fotoebi);
        }
  
        return {
          featuredBtn: item.featuredBtn,
          imgLink: firstimg,
          gncxdebis_idi: item.idi,
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
          uploadmonth: 3,
          momxmreblis_idi: item.amtvirtvelis_idi,
        };
      });
  
      this.DiscoverPopularPlaces$.next(transformedData); // ✅ Update with transformed API data
    });
  
    return this.DiscoverPopularPlaces$;
  }
  
  
}
