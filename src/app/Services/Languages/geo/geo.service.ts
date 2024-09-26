import { Injectable } from '@angular/core';
import { every } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {


NavG={Home:'მთავარი გვერდი' , Listing:'ჩამონათვალი',
    Property:'უძრავი ქონება', Pages:'გვერდები',Blog:'ბლოგი',
    Contact:'კონტაქტი',SignIn:'რეგისტრაცია',AddListing:' სიის დამატება'}

    Header={FindYourHouse:'იპოვე შენი საოცნებო ' ,weHaveOverMillion:'ჩვენ გვაქვს უძრავი ქონების მილიონზე მეტი  არჩევანი, თქვენთვის' ,ForSale:'იყიდება', ForRent:'ქირავდება',
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
      

  constructor() { }
}
