import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, NgZone, Output, PLATFORM_ID } from '@angular/core';
import { NavInfoService } from '../../Services/NavService/nav-info.service';

import { EngService } from '../../Services/Languages/eng/eng.service';
import { GeoService } from '../../Services/Languages/geo/geo.service';
import { RusService } from '../../Services/Languages/rus/rus.service';
@Component({
  selector: 'app-listing-nav',
  templateUrl: './listing-nav.component.html',
  styleUrl: './listing-nav.component.scss'
})
export class ListingNavComponent {

  scrollY: number=0


ShowImg=false;
displayElement=false;
showLanguages=false;
navLang=this.navService.Languages;
chosenLang='GEO'
ProfileSettings=[{ Text:'Edit Profile'},{ Text:'Add Property'},{Text:'Payments'},{Text:'Change Password'},{Text:'Log Out'}]
NavElements:any
SignedIn:any
staticElements: any;
Displayer=false
@Output() valueChange = new EventEmitter<string>();


LeftNavInfo=[
  {icon:'../../../assets/Imges/StaticImg/StaticIcons/Location.svg ',Text:'Dashboard'},
  {icon:'../../../assets/Imges/StaticImg/StaticIcons/person-fill.svg ',Text:'Profile'},
  {icon:'../../../assets/Imges/StaticImg/StaticIcons/list.svg ',Text:'My Properties'},

  {icon:'../../../assets/Imges/StaticImg/StaticIcons/heart-fill.svg',Text:'Favorited Properties'},
  {icon:'../../../assets/Imges/StaticImg/StaticIcons/list.svg',Text:'Add Property'},
  {icon:'../../../assets/Imges/StaticImg/StaticIcons/credit-card-fill.svg ',Text:'Payements'},
  {icon:'../../../assets/Imges/StaticImg/StaticIcons/invoice.svg ',Text:'Invoices'}, 
  {icon:'../../../assets/Imges/StaticImg/StaticIcons/lock-fill.svg',Text:'change Password'},
  {icon:'../../../assets/Imges/StaticImg/StaticIcons/log-out.svg',Text:'Log Out'},
]
activeElement= this.LeftNavInfo[4];


  constructor(private navService: NavInfoService,private ngZone: NgZone,private EngService:EngService ,private GeoService:GeoService ,private RusService:RusService , 
    @Inject(PLATFORM_ID) private platformId: Object){

      this.SignedIn=this.navService.IsSignedIn;
this.NavElements=this.navService.MenuBar;
this.staticElements=this.GeoService
if (isPlatformBrowser(this.platformId)) {
  if (localStorage.getItem('Language')) {
    this.chosenLang = localStorage.getItem('Language');
  }

  switch (this.chosenLang) {
    case 'GEO':
      this.staticElements = GeoService.NavG;
      break;

    case 'ENG':
      this.staticElements = EngService.NavE;
      break;

    case 'RUS':
      this.staticElements = RusService.NavR;
      break;


  }
}


  }

  chosenLanguage(element: number){
    localStorage.removeItem('Language');
    this.navService.chosenLang=this.navLang[element];
    console.log(this.navService.chosenLang)
  this.chosenLang=this.navService.chosenLang;
  localStorage.setItem('Language', this.chosenLang);
  
  if(this.chosenLang=='GEO'){
    this.staticElements=this.GeoService.NavG

  }else if(this.chosenLang=='ENG'){
this.staticElements=this.EngService.NavE
  }else if(this.chosenLang=='RUS'){
    this.staticElements=this.RusService.NavR
  }
this.showLanguages=false;
window.location.reload();

  }
  displayEl(){
this.displayElement=!this.displayElement;
  }
  displayLanguages(){
this.showLanguages=!this.showLanguages;
  }
  activedPage(element){

    this.activeElement=element
    this.valueChange.emit(element.Text);
    
  }

}
