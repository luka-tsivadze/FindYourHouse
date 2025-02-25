import { Injectable } from '@angular/core';
import { CardGallery1Component } from '../../../../DetailedInfo/card-gallery1/card-gallery1.component';
import { scheduled } from 'rxjs';


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
    City:{ HeaderName: 'City', placeHolder: 'Enter Your city', id: 'City', formControlName: 'qalaqi' , type:'text'},
    
    form3Info : [
      { HeaderName: 'Address', placeHolder: 'Enter Your Address', id: 'adress', formControlName: 'misamarti' , type:'text'},
     
    
    
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
     {label:'First Name',placeholder:'Enter Your First Name', FormControl:'saxeli'},
     {label:'Last Name ',placeholder:'Enter Your Last Name ', FormControl:'gvari'},

     {label:'Phone Number',placeholder:'ex:+1-800-7700-00', FormControl:'phone'},
     {label:'Address',placeholder:'Write Your Address hare'},
    ],
    textArea:[
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
contact={
  staticText : {
    header:'Contact Us',
    headerH4:'Home  /  Contact Us',
    Mes:'Message',
    sub:'Submit',
    cd:'Contact Details',
    cp:'Please find below contact details and contact us today!'

  },
  inputs : [
    { placeholder: 'First Name', type: 'text', FormControlname: 'saxeli' },
    { placeholder: 'Last Name', type: 'text', FormControlname: 'gvari' },
    { placeholder: 'Header', type: 'text', FormControlname: 'satauri' },
    { placeholder: 'Email', type: 'email', FormControlname: 'maili' },
  ],
}
About={
  headerH2:'About Our Company',
  headerH4:'Home / About Us',
  span1:'About',
  span2:'Find Houses',
  mainText:
`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum odio id voluptatibus incidunt cum? 
Atque quasi eum debitis optio ab. Esse itaque officiis tempora possimus odio rerum aperiam ratione, sunt.
 Lorem ipsum dolor sit amet, consectetur adipisicing elit sunt.  Lorem ipsum dolor sit amet, consectetur adipisicing elit sunt.
`,
btn:'Read More'
}
DetailedInfo={
  advertismentr:'Specials of the day',
  AgentsInfo:{
    inputs : [
      {
        type: 'text',
        placeholder: 'First Name',
        formControlName:'saxeli'
      },
      {
        type: 'number',
        placeholder: 'Phone Number',
        formControlName: 'nomeri'
      },
      {
        type: 'email',
        placeholder: 'Email',
        formControlName: 'email'
      }
    ],
    staticValues:{
      h3:'Agent Information',
      p:'Agent of Property',  //could be changed to dynamic
      req:'Request Inquiry',
      submit:'Submit Request',
      textArea:'Message'
    }
  },
 CardGallery1:'Gallery',
 parent:'Description',
 Featuredpr:{
  header:'Featured Properties',
  area:'Area',
  rooms:'Rooms',
  beds:'Beds',
 },
 Floorplan:'Floor Plan',
 leftAmenties:{
    h2:'Property Details',
    h2a:'Amenities',
    propstatic:['Property ID', 'Property Type', 'Property Status', 'Property Price', 'Rooms', 'Bedrooms', 'Bath', 'Area', 'Year Built']
 },
 map:'Location',
 near:"What's Nearby",
 propvideo:'Property Video',
 recentStatic:'Recent Properties',
 reviewAd:{
  header:'Add Review',
  p:'your Rating For This  Listing',
  placeholderN:'Review',
  submit:'Submit Review'
  
  },
  reviews:'Reviews',
  scheduled:{
    header:'Schedule a Tour',
    ad:'Adult',
    ch:'Children',
    submit:'Submit'
  },
   simProp:'Similar Properties',
   tagscomp:{
    header:'Popular Tags',
    Tags : ['Houses', 'Real Home', 'Baths', 'Beds', 'Garages', 'Family','Real Estates','Properties','Location','Price']
  }
}

  constructor() { }


}
