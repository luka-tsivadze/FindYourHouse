import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  allForms = {
    form1info: {
      HeaderName1: 'პროექტის აღწერა და ფასი',
      firstTitle: 'ქონების სახელი',
      firstplaceHolder: 'შეიტანეთ თქვენი ქონების სახელი',
  
      secondTitle: 'პროდუქტის აღწერა',
      secondplaceHolder: 'აღწერეთ თქვენი პროდუქტი',
  
      firstselectName: 'აირჩიეთ სტატუსი',
      firstselect: ['იყიდება', 'ქირავდება', 'გირავდება', 'ქირავდება დღიურად', '⁠მშენებარე ბინები'],
  
      secondselectName: 'ქონების ტიპი',
      secondselect: ['ბინა', 'სახლი', 'კომერციული', 'გარაჟი'],
  
      thirdselectName: 'ოთახების რაოდენობა',
  
      thirdTitle: 'ფასი',
      fourthTitle: 'ფართობი',
  
      HeaderName2: 'ქონების სურათები',
      HeaderName3: 'ქონების ვიდეო',
      HeaderName4: 'სართულის გეგმა',
      HeaderName5: 'ქონების მდებარეობა',
      HeaderName6: 'დამატებითი ინფორმაცია',
      HeaderName7: 'ქონების მახასიათებლები',
      HeaderName8: 'კონტაქტის ინფორმაცია',
      submit: 'ატვირთვა'
    },
  
    form4Info: [
      {
        id: 'Age',
        FormControlName: 'asaki',
        firstOption: 'აირჩიე ასაკი',
        options: ['0-1 წელი', '0-5 წელი', '0-10 წელი', '0-15 წელი', '0-20 წელი', '0-50 წელი', '50+ წელი'],
        formControlName: 'asaki'
      },
      {
        id: 'badrooms',
        firstOption: 'საძინებელი',
        options: ['1', '2', '3', '4', '5', '6'],
        formControlName: 'sadzinebeli'
      },
      {
        id: 'bathroom',
        firstOption: 'სააბაზანო',
        options: ['1', '2', '3', '4', '5', '6'],
        formControlName: 'sveli_wertilebis_raodenoba'
      }
    ],
  
    form3Info: [
      { HeaderName: 'მისამართი', placeHolder: 'შეიყვანეთ თქვენი მისამართი', id: 'adress', formControlName: 'misamarti', type: 'text' },
      { HeaderName: 'ქალაქი', placeHolder: 'შეიყვანეთ თქვენი ქალაქი', id: 'City', formControlName: 'qalaqi', type: 'text' },
  
      { HeaderName: 'Google Map გრძედი', placeHolder: 'შეიყვანეთ Google Map გრძედი', id: 'mapa', formControlName: 'mapis_grdzedi', type: 'number' },
      { HeaderName: 'Google Map განედი', placeHolder: 'შეიყვანეთ Google Map განედი', id: 'mapo', formControlName: 'mapis_ganedi', type: 'number' }
    ],
  
    form5Info: [
      { text: 'კონდიციონერი', id: 'air', formControlName: 'kondincioneri' },
      { text: 'საცურაო აუზი', id: 'pool', formControlName: 'sacurao_auzi' },
      { text: 'ცენტრალური გათბობა', id: 'Heating', formControlName: 'centrluri_gatboba' },
      { text: 'სამრეცხაო ოთახი', id: 'room', formControlName: 'samrecxao_otaxi' },
      { text: 'სპორტული დარბაზი', id: 'gym', formControlName: 'sportuli_darbazi' },
      { text: 'სიგნალიზაცია', id: 'alarm', formControlName: 'signalizacia' },
      { text: 'აივანი', id: 'balcon', formControlName: 'aivani' },
      { text: 'მაცივარი', id: 'Refrigerator', formControlName: 'macivari' },
      { text: 'TV & WIFI', id: 'TV', formControlName: 'televizia_wifi' },
      { text: 'მიკროტალღური ღუმელი', id: 'Mic', formControlName: 'microtalguri' }
    ],
  
    form6Info: [
      { HeaderName: 'სახელი', placeHolder: 'შეიყვანეთ თქვენი სახელი', id: 'name6', formControlName: 'momxmareblis_saxeli' },
  
      { HeaderName: 'ელ.ფოსტა', placeHolder: 'შეიყვანეთ თქვენი ელ. ფოსტა', id: 'Email6', formControlName: 'el_fosta' },
      { HeaderName: 'ტელეფონი', placeHolder: 'შეიყვანეთ თქვენი ნომერი', id: 'Number6', formControlName: 'telefonis_nomeri' }
    ]
  }
  LeftInfo = [
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/Location.svg', Text: 'მართვა', upText: 'Dashboard'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/person-fill.svg', Text: 'პროფილი', upText: 'Profile'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/list.svg', Text: 'ჩემი ქონება', upText: 'My Properties'},
    
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/heart-fill.svg', Text: 'ფავორიტი ქონება', upText: 'Favorited Properties'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/list.svg', Text: 'ატვირტე განცხადება', upText: 'Add Property'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/credit-card-fill.svg', Text: 'გადახდები', upText: 'Payments'},
    
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/lock-fill.svg', Text: 'პაროლის შეცვლა', upText: 'Change Password'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/log-out.svg', Text: 'გასვლა', upText: 'Log Out'}
  ]
  Dashboard = {
    dash_listing: {
      mainHeader: 'მართვა',
      headers: ['სახელი', 'თარიღი', 'რეიტინგი', 'სტატუსი', 'რედაქტირება']
    },
    manage: {
      header: 'დაშბორდის მართვა',
      cards: [
        { title: 'გამოქვეყნებული ქონება' },
        { title: 'მიმოხილვები' },
        { title: 'შეტყობინებები' },
        { title: 'დაჯავშნულის რაოდენობა' }
      ]
    },
    DashReview: {
      header: 'მიმოხილვა'
    },
    PersonalInfo: {
      staticElements: {
        Header: 'პერსონალური ინფორმაცია',
        updateBtn: 'განაახლეთ თქვენი პაროლი',
        submit: 'გაგზავნა'
      },
      inputText: [
        { label: 'სახელი', placeholder: 'შეიყვანეთ თქვენი სახელი' },
        { label: 'გვარი', placeholder: 'შეიყვანეთ თქვენი გვარი' },
        { label: 'ელ.ფოსტა', placeholder: 'შეიყვანეთ თქვენი ელ.ფოსტა' },
        { label: 'ტელეფონის ნომერი', placeholder: 'მაგ: +1-800-7700-00' }
      ],
      textArea: [
        { label: 'მისამართი', placeholder: 'დაწერეთ თქვენი მისამართი' },
        { label: 'თქვენ შესახებ', placeholder: 'დაწერეთ თქვენ შესახებ' }
      ]
    }
  }
  
  

  constructor() { }
}
