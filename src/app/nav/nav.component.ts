import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavInfoService } from '../Services/NavService/nav-info.service';
import { EngService } from '../Services/Languages/eng/eng.service';
import { GeoService } from '../Services/Languages/geo/geo.service';
import { RusService } from '../Services/Languages/rus/rus.service';
import { RegistrationService } from '../Services/registration/registration.service';
import { RegistrationService } from '../Services/registration/registration.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  scrollY: number=0
LogoLink='../../assets/Imges/NavImg/NavIcon1.svg'
GlobeLink='../../assets/Imges/NavImg/thirdImg.png'
ShowImg=false;
displayElement=false;
showLanguages=false;
navLang=this.navService.Languages;
chosenLang='GEO'
ProfileSettings=[{ Text:'Edit Profile'},{ Text:'Add Property'},{Text:'Payments'},{Text:'Change Password'},{Text:'Log Out'}]
NavElements:any
IsSignedIn:any
staticElements
Displayer=false


  constructor(private navService: NavInfoService,private EngService:EngService ,private GeoService:GeoService ,private RusService:RusService , private  Registration: RegistrationService,
  constructor(private navService: NavInfoService,private EngService:EngService ,private GeoService:GeoService ,private RusService:RusService , private  Registration: RegistrationService,
    @Inject(PLATFORM_ID) private platformId: Object){

      this.IsSignedIn=this.navService.IsSignedIn;
this.NavElements=this.navService.MenuBar;
this.staticElements=this.GeoService
if (isPlatformBrowser(this.platformId)) {
  if (localStorage.getItem('Language')) {
    this.chosenLang = localStorage.getItem('Language');
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

  chosenLanguage(element){
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

window.location.reload();

  }
  displayEl(){
this.displayElement=!this.displayElement;
  }
  displayLanguages(){
this.showLanguages=!this.showLanguages;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {  

      this.scrollY = window.scrollY || window.pageYOffset; // Get the current scroll position

      if(this.scrollY>100){
        this.LogoLink='../../assets/Imges/NavImg/NavIcon2.svg'
        this.GlobeLink='../../assets/Imges/NavImg/globeBlack.svg'
      }else{
        this.LogoLink='../../assets/Imges/NavImg/NavIcon1.svg'
        this.GlobeLink='../../assets/Imges/NavImg/thirdImg.png'
      }
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }
  showRegistrForm() {
   window.document.body.style.overflow = "hidden";
    this.Registration.setDisplayer(true);

  }
  
}
