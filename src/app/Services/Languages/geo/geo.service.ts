import { Injectable } from '@angular/core';
import { every } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  MenuBar = {
    Home: [  ],
  
    Property: [ ],
    Pages: [ 
      { a: 'მომხმარებლის პანელი',chack:'User Panel', Showimg: true, RouterLink: '', subText: [ {text: 'მართვა', value: 'Dashboard'},
        { text: 'პროფილი', value: 'Profile' }, {text: 'ჩემი განცხადებები', value: 'My Properties'}, { text: 'შენახული განცხადებები', value: 'Favorited Properties'},
        {text: 'განცხადების დამატება', value: 'Add Property'} ,{text: 'გადახდა', value: 'Payments'},{text: 'პაროლის შეცვლა', value: 'Change Password'}] },
      { a: 'შესვლა',chack:'Login', Showimg: false },
      { a: 'რეგისტრაცია',chack:'Register' , Showimg: false, RouterLink: ''  },
      { a: 'ჩვენ შესახებ',  Showimg: false, RouterLink: '/about' },
    ],
    Blog: [ 
      { a: 'ტექსტი', Showimg: true, subText: ['ტექსტი 1', 'ტექსტი 2', 'ტექსტი 3'] },
      { a: 'ტექსტი', Showimg: false },
      { a: 'ტექსტი', Showimg: false }
    ],
    profileSettings: [
      { Text: 'პროფილის რედაქტირება', value: 'Edit Profile', routes: '' },
      { Text: 'განცხადების დამატება', value: 'Add Property' },
      { Text: 'გადახდები', value: 'Payments' },
      { Text: 'პაროლის შეცვლა', value: 'Change Password' },
      { Text: 'გასვლა', value: 'Log Out' }
    ]
    
  };
  

NavG={Home:'მთავარი ' , 
    Property:'უძრავი ქონება', Pages:'გვერდები',Blog:'ბლოგი',
    Contact:'კონტაქტი',SignIn:'შესვლა',AddListing:' განცხადების ატვირთვა'}

    Header={FindYourHouse:'იპოვე შენი საოცნებო ' ,weHaveOverMillion:'ჩვენ გვაქვს უძრავი ქონების მილიონზე მეტი  არჩევანი, თქვენთვის' ,status:['იყიდება','ქირავდება','გირავდება','ქირავდება დღიურად',' მშენებარე ბინები'],
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
For={
  text: 'ქონების სტატუსი',
  optdisplay:[ 'ქირავდება', 'იყიდება', 'გირავდება', 'ქირავდება ყოველდღიურად', 'მშენებარე ბინები'],
}
allFilter = {
  FirstFilter: {
    locations: ['Tbilisi', 'Batumi', 'kutaisi', 'Rustavi', 'Zugdidi', 'Telavi', 'Bakuriani', 'Kobuleti'],
    locationDis: ['თბილისი', 'ბათუმი', 'ქუთაისი', 'რუსთავი', 'ზუგდიდი', 'თელავი', 'ბაკურიანი', 'ქობულეთი'],

    PropertyTypes: ['Apartment', 'House', 'Commercial', 'Garage'],
    PropertyTypesDis: ['ბინა', 'სახლი', 'კომერციული', 'ავტოფარეხი']
  },
  filter: {
    SelectInputs: [
      {
        imgLink: '../../../assets/Imges/StaticImg/StaticIcons/sleeping.png',
        text: 'საძინებელი',
        options: ['საძინებელი', '1', '2', '3', '4', '5', '6', '7'],
        name: 'bedrooms',
      },
      {
        imgLink: '../../../assets/Imges/StaticImg/StaticIcons/bathtub.svg',
        text: 'სააბაზანო',
        options: ['სააბაზანო', '1', '2', '3', '4', '5'],
        name: 'bathrooms',
      },
    ],
    range: {
      area: 'ფართობი',
      MAmount: 'კვ.მ',
      Price: 'ფასის დიაპაზონი'
    },
    filteredCheckBox: [
      { id: '1', label: 'Air Conditioning', name: 'კონდინციონერი', formcontroller: 'airConditioning' },
      { id: '2', label: 'Swimming Pool', name: 'აუზი', formcontroller: 'swimmingPool' },
      { id: '3', label: 'TV Cable & wifi', name: 'ტელევიზია და ინტერნეტი', formcontroller: 'tvCable' },
      { id: '4', label: 'Central Heating', name: 'ცენტრალური გათბობა', formcontroller: 'centralHeating' },
      { id: '5', label: 'Laundry Room', name: 'სარეცხი ოთახი', formcontroller: 'laundryRoom' },
      { id: '6', label: 'Microwave', name: 'მიკროტალღური ღუმელი', formcontroller: 'microwave' },
      { id: '7', label: 'Gym', name: 'სპორტული დარბაზი', formcontroller: 'gym' },
      { id: '8', label: 'Alarm', name: 'სიგნალიზაცია', formcontroller: 'alarm' },
      { id: '9', label: 'Refrigerator', name: 'მაცივარი', formcontroller: 'refrigerator' },
      { id: '10', label: 'Window Covering', name: 'აივანი', formcontroller: 'windowCovering' },
    ],
  },
  

}



  constructor() { }
}
