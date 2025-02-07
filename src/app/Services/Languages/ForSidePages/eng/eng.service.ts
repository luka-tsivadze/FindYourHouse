import { Injectable, input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngService {

  allForms={
 
    form1info : {
      HeaderName1: 'Property description and price',
      firstTitle: 'Property title',
      firstplaceHolder: 'Enter your property title',
    
    secondTitle: 'Property description',
    secondplaceHolder: 'describe your property',
    
    firstselectName: 'Select Status',
    firstselect:['For Sale', 'For Rent', 'Pledge','rented daily','Apartments under construction'],
    
    secondselectName: 'Property Types',
    secondselect:['Apartment', 'House', 'Commercial', 'Garage'],
    
    upPict:'click Hare To Upload Pictures',
    upVid:'click Hare  To Upload Video',
    upPlan:'click Hare To Upload Floor Plan',
    loadingScreen:'Loading...',

    thirdselectName: 'Rooms',
    
    thirdTitle: 'Price',
    fourthTitle:'area',
    
    HeaderName2: 'Property Pictures',
    HeaderName3: 'Property Video',
    HeaderName4:'Floor Plan',
    HeaderName5:'Property Location',
    HeaderName6:'Extra Information',
    HeaderName7:'Propert Features',
    HeaderName8:'Contact Information',
    submit:'Submit Property'
    },
    
    form4Info : [
      {
        id: 'Age',
        FormControlName: 'asaki',
        firstOption: 'Select Age',
        options: ['0-1 Years', '0-5 Years', '0-10 Years', '0-15 Years', '0-20 Years', '0-50 Years', '50+ Years'],
        formControlName: 'asaki'
      },
      {
        id: 'badrooms',
        firstOption: 'Bedrooms',
        options: ['1', '2', '3', '4', '5', '6'],
        formControlName: 'sadzinebeli'
      },
      {
        id: 'bathroom',
        firstOption: 'Bathrooms',
        options: ['1', '2', '3', '4', '5', '6'],
        formControlName: 'sveli_wertilebis_raodenoba'
      }
    ],
    
    form3Info : [
      { HeaderName: 'Address', placeHolder: 'Enter Your Address', id: 'adress', formControlName: 'misamarti' , type:'text'},
      { HeaderName: 'City', placeHolder: 'Enter Your city', id: 'City', formControlName: 'qalaqi' , type:'text'},
    
    
      { HeaderName: 'Google Map Latitude', placeHolder: 'Google Map Latitude', id: 'mapa', formControlName: 'mapis_grdzedi' ,type:'number' },
      { HeaderName: 'Google Map Longitude', placeHolder: 'Google Map Longitude', id: 'mapo', formControlName: 'mapis_ganedi' , type:'number' }
    ],
    
    form5Info : [
      { text: 'Air Conditioning', id: 'air', formControlName: 'kondincioneri' },
      { text: 'Swimming Pool', id: 'pool', formControlName: 'sacurao_auzi' },
      { text: 'Central Heating', id: 'Heating', formControlName: 'centrluri_gatboba' },
      { text: 'Laundry Room', id: 'room', formControlName: 'samrecxao_otaxi' },
      { text: 'Gym', id: 'gym', formControlName: 'sportuli_darbazi' },
      { text: 'Alarm', id: 'alarm', formControlName: 'signalizacia' },
      { text: 'balcony', id: 'balcon', formControlName: 'aivani' },
      { text: 'Refrigerator', id: 'Refrigerator', formControlName: 'macivari' },
      { text: 'TV Cable & WIFI', id: 'TV', formControlName:'televizia_wifi' },
      { text: 'Microwave', id: 'Mic', formControlName: 'microtalguri' }
    ],
    
    form6Info : [
      { HeaderName: 'Name', placeHolder: 'Enter Your Name', id: 'name6', formControlName: 'momxmareblis_saxeli' },
    
      { HeaderName: 'Email', placeHolder: 'Enter Your Email', id: 'Email6', formControlName: 'el_fosta' },
      { HeaderName: 'Phone', placeHolder: 'Enter Your Number', id: 'Number6', formControlName: 'telefonis_nomeri' }
    ]
    }
   LeftInfo = [
  {icon: '../../../assets/Imges/StaticImg/StaticIcons/Location.svg', Text: 'Dashboard', upText: 'Dashboard'},
  {icon: '../../../assets/Imges/StaticImg/StaticIcons/person-fill.svg', Text: 'Profile', upText: 'Profile'},
  {icon: '../../../assets/Imges/StaticImg/StaticIcons/list.svg', Text: 'My Properties', upText: 'My Properties',},
  
  {icon: '../../../assets/Imges/StaticImg/StaticIcons/heart-fill.svg', Text: 'Favorited Properties', upText: 'Favorited Properties'},
  {icon: '../../../assets/Imges/StaticImg/StaticIcons/list.svg', Text: 'Add Property', upText: 'Add Property'},
  {icon: '../../../assets/Imges/StaticImg/StaticIcons/credit-card-fill.svg', Text: 'Payments', upText: 'Payments', },
  
  {icon: '../../../assets/Imges/StaticImg/StaticIcons/lock-fill.svg', Text: 'Change Password', upText: 'Change Password', },
  {icon: '../../../assets/Imges/StaticImg/StaticIcons/log-out.svg', Text: 'Log Out', upText: 'Log Out', }
]
Dashboard={
  dash_listing:{
    mainHeader:'Dashboard',
  headers:['Listing Name','Date','Rating','Status','Edit'],
  },
  manage:{
    header:'Manage Dashboard',
    cards:[
      { title:'Published Property'},
      { title:'Total Reviews'},
      {  title:'Messages' },
      { title:'Times Bookmarked'}
    ]
  },
  DashReview:{
header:'Review'
  }, 
  PersonalInfo:{
    staticElements:{Header:'Personal Information' , updateBtn:'Update Your Password' , submit:'Submit' },
    inputText:[
     {label:'First Name',placeholder:'Enter Your First Name'},
     {label:'Last Name ',placeholder:'Enter Your Last Name '},
     {label:'Email Address',placeholder:'Enter Your Email'},
     {label:'Phone Number',placeholder:'ex:+1-800-7700-00'}
    ],
    textArea:[{
label:'Address',placeholder:'Write Your Address hare'
    },
  {label:'About Yourself',placeholder:'Write about Yourself 1'}
  ]
  }

}
Profile={
  header:'Profile Details',
  inquary:'Request Inquary',
  submit:'Submit Request',
  input:['First Name','Phone Number','Email']
}
ChangePassword={
  header:'change Password',
  pas:'Current password',
  NewPas:'New password',
  ConfPas:'Confirm Your password',
  submit:'Send Changes'
}
myProp={
  Header:'Top Properties',
  date:'Date Added',
  Views:'Views',
  action:'Actions',
  rew:"Reviews",
  ago:'Months Ago',
  Ed:'Edit',
  prev:'Previous',
  next:'Next'
}
  constructor() { }
}
