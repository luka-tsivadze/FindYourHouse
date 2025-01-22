import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Inject, NgZone, Output, PLATFORM_ID } from '@angular/core';
import { NavInfoService } from '../../Services/NavService/nav-info.service';

import { EngService } from '../../Services/Languages/Eng/eng.service';
import { GeoService } from '../../Services/Languages/geo/geo.service';
import { RusService } from '../../Services/Languages/rus/rus.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';
import { ListingServiceService } from '../../Services/listing-service/listing-service.service';
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


LeftNavInfo=this.lang.chosenLang.LeftInfo;
activeElement=this.LeftNavInfo[4].Text;

  router: any;


  constructor(  private sharedService:ListingServiceService ,private navService: NavInfoService,private lang:LanguageChooserService,private EngService:EngService ,private GeoService:GeoService ,private RusService:RusService , 
    @Inject(PLATFORM_ID) private platformId: Object){
      this.valueChange.emit(this.activeElement);
      this.SignedIn=this.navService.IsSignedIn;
this.NavElements=this.navService.MenuBar;
this.staticElements=this.GeoService
if (isPlatformBrowser(this.platformId)) {
  this.activeElement=localStorage.getItem('ActiveElement')

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


  ngOnInit(): void {

    const editItemSubscription = this.sharedService.editItemId$.subscribe(() => {   //to add active class navelement when user clicks on edit in my properties

  

        this.activeElement = 'Add Property';

  

      
    });

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

    localStorage.setItem('ActiveElement',element)
    this.activeElement=element;
    this.valueChange.emit(this.activeElement);
  }
  
  uploadToLocal(info){
  
    localStorage.setItem('ActiveElement',info)
    window.location.reload();

  }
}
