import { Injectable } from '@angular/core';
import { every } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {


NavG={Home:'მთავარი ' , 
    Property:'უძრავი ქონება', Pages:'გვერდები',Blog:'ბლოგი',
    Contact:'კონტაქტი',SignIn:'რეგისტრაცია',AddListing:' სიის დამატება'}

    Header={FindYourHouse:'იპოვე შენი საოცნებო ' ,weHaveOverMillion:'ჩვენ გვაქვს უძრავი ქონების მილიონზე მეტი  არჩევანი, თქვენთვის' ,status:['ქირავდება','იყიდება','გირავდება','ქირავდება დღიურად',' მშენებარე ბინები'],
       KayWord:'საძიებო სიტყვა', propertyType:'ქონების ტიპი', Advanced:'გაფართოებული ძებნა', Search:'მოძებნა',location:'მდებარეობა'
    }
    popularPlaces={Header:'პოპულარული ადგილები' ,properties:'უძრავი ქონება ყველაზე პოპულარულ ადგილებში', prop:"ადგილი"} 
    featuredPropertiesStatic = {
      Header: 'პოპულარული განცხადებები',
      properties: 'ეს არის ჩვენი გამორჩეული განცხადებები',
      featured: 'რეკომენდირებული',
      For: 'იყიდება',
      BedRooms: 'საძინებელი',
      BathRooms: 'სააბაზანო',
      Garage: 'ავტოფარეხი',
      Area: 'კვ.მ',
      ViewDetails: 'მეტის ნახვა'
    }
    main={WhyChooseUs:'რატომ ჩვენ', everyStep:'ჩვენ გთავაზობთ სრულ სერვისს ყოველ ნაბიჯზე '   ,popularPropertys:'აღმოაჩინე პოპულარული ქონება' , AgentsH:'შეხვდით ჩვენს აგენტებს' , 
      AgentsP:'ჩვენ ყოველთვის მზად ვართ რომ დაგეხმაროთ' ,RHeader:'კლიენტების შეფასებები',Rptext:'ჩვენ ვაგროვებთ შეფასებებს ჩვენი მომხმარებლებისგან.'}
    
    SFooter = {
        headerFP: 'ჩვენი პარტნიორები', 
        pFP: 'კომპანიები, რომლებიც წარმოადგენენ ჩვენს ინტერესებს.', 
        NavFooter: 'ნავიგაცია', 
        Twiter: 'ტვიტერის ფიდი', 
        NewsFooter: 'საინფორმაციო მიმოწერა', 
        NewsFooterText: 'გაიარეთ რეგისტრაცია , რათა მიიღოთ უახლესი განახლებები და შეთავაზებები. გამოიწერეთ სიახლეები თქვენს ელფოსტაზე.', 
        NewsFooterBtn: 'გამოწერა', 
        NewsFooterPlaceHolder: 'შეიყვანეთ თქვენი ელ.ფოსტა'
      }
      
//main-listing Component

form4Info = [
  {
    id: 'Age',
    FormControlName: 'asaki',
    firstOption: 'აირჩიეთ ქონების ასაკი',
    options: ['0-1 წელი', '0-5 წელი', '0-10 წელი', '0-15 წელი', '0-20 წელი', '0-50 წელი', '50+ წელი'],
    formControlName: 'asaki'
  },
  {
    id: 'badrooms',
    firstOption: 'საძინებლები',
    options: ['1', '2', '3', '4', '5', '6'],
    formControlName: 'sadzinebeli'
  },
  {
    id: 'bathroom',
    firstOption: 'სველი წერტილი',
    options: ['1', '2', '3', '4', '5', '6'],
    formControlName: 'sveli_wertilebis_raodenoba'
  }
];

form3Info = [
  { HeaderName: 'მდებარეობა', placeHolder: 'შეიყვანეთ მისამართი', id: 'adress', formControlName: 'misamarti' },
  { HeaderName: 'ქალაქი', placeHolder: 'შეიყვანეთ ქალაქი', id: 'City', formControlName: 'qalaqi' },


  { HeaderName: 'Google Map-ის გრძედი', placeHolder: 'შეიყვანეთ გრძედი', id: 'mapa', formControlName: 'mapis_grdzedi' },
  { HeaderName: 'Google Map-ის განედი', placeHolder: 'შეიყვანეთ განედი',  id: 'mapo', formControlName: 'mapis_ganedi' }
];

form5Info = [
  { text: 'კონდინციონერ', id: 'air', formControlName: 'kondincioneri' },
  { text: 'საცურაო აუზი', id: 'pool', formControlName: 'sacurao_auzi' },
  { text: 'ცენტრალური გათბობა', id: 'Heating', formControlName: 'centrluri_gatboba' },
  { text: 'სარეცხის ოთახი', id: 'room', formControlName: 'samrecxao_otaxi' },
  { text: 'სპორტდარბაზი', id: 'gym', formControlName: 'sportuli_darbazi' },
  { text: 'მაღვიძარა', id: 'alarm', formControlName: 'signalizacia' },
  { text: 'აივანი', id: 'balcon', formControlName: 'aivani' },
  { text: 'მაცივარი', id: 'Refrigerator', formControlName: 'macivari' },
  { text: 'ტელევიზია და ინტერნეტი', id: 'TV', formControlName:'televizia_wifi' },
  { text: 'მიკროტალღური ღუმელი', id: 'Mic', formControlName: 'microtalguri' }
];

form6Info = [
  { HeaderName: 'სახელი', placeHolder: 'შეიყვანე შენი სახელი', id: 'name6', formControlName: 'momxmareblis_saxeli' },

  { HeaderName: 'ემაილი', placeHolder: 'შეიყვანე შენი ემაილი', id: 'Email6', formControlName: 'el_fosta' },
  { HeaderName: 'ტელეფონი', placeHolder: 'შეიყვანე შენი ნომერი', id: 'Number6', formControlName: 'telefonis_nomeri' }
];


  constructor() { }
}
