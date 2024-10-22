import { Injectable } from '@angular/core';
import { EngService } from '../Languages/eng/eng.service';
import { GeoService } from '../Languages/geo/geo.service';
import { RusService } from '../Languages/rus/rus.service';
import { MainPageDataService } from '../mainPageService/main-page-data.service';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  PartnerImges=[
    '../../assets/Imges/Footer/PartnersImg/11.jpg','../../assets/Imges/Footer/PartnersImg/12.jpg','../../assets/Imges/Footer/PartnersImg/13.jpg'
    ,'../../assets/Imges/Footer/PartnersImg/14.jpg','../../assets/Imges/Footer/PartnersImg/15.jpg','../../assets/Imges/Footer/PartnersImg/16.jpg',
    '../../assets/Imges/Footer/PartnersImg/17.jpg'
  ]

  FooterData={
    FindHouse:{mainText:'New real estate buying and selling and renting portal in Georgia',
              location:'Georgia',
              Number:'+456 875 369 208',
              Email:'support@findhouses.com'
    },
  Navigation:[
    {list1:'Home One',list2:'Agents Details'},
    {list1:'Properties Right',list2:'About Us'},
    {list1:'Properties List',list2:'Blog Default'},
    {list1:'Property Details',list2:'Blog Details'},
    {list1:'Agents Listing' , list2:'Contact Us'}
  ],
  TwitterFeed:[{firstWord:"FindHouses", text:'All Share Them With Me Baby Said Inspet.' , time:'about 5 days ago' }]
}

   staticValues = {
    headerFP: 'ჩვენი პარტნიორები', 
    pFP: 'კომპანიები, რომლებიც წარმოადგენენ ჩვენს ინტერესებს.', 
    NavFooter: 'ნავიგაცია', 
    Twiter: 'ტვიტერის ფიდი', 
    NewsFooter: 'საინფორმაციო მიმოწერა', 
    NewsFooterText: 'გაიარეთ რეგისტრაცია , რათა მიიღოთ უახლესი განახლებები და შეთავაზებები. გამოიწერეთ სიახლეები თქვენს ელფოსტაზე.', 
    NewsFooterBtn: 'გამოწერა', 
    NewsFooterPlaceHolder: 'შეიყვანეთ  ელ.ფოსტა'
  }
  

  constructor( private Engservice:EngService, private GeoService:GeoService,private RusService:RusService, mainService:MainPageDataService){
if(mainService.localStorage){
  switch (mainService.localStorage) {
    case 'ENG':
  this.staticValues=this.Engservice.SFooter
    break;
      case 'GEO':
        this.staticValues=this.GeoService.SFooter
      break;
      case 'RUS':
        this.staticValues=this.RusService.SFooter
        break;
  
}   
}
}
}