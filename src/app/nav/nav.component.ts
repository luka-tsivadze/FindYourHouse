import { Component, HostListener,NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavInfoService } from '../Services/NavService/nav-info.service';
import { EngService } from '../Services/Languages/eng/eng.service';
import { GeoService } from '../Services/Languages/geo/geo.service';
import { RusService } from '../Services/Languages/rus/rus.service';
import { RegistrationService } from '../Services/registration/registration.service';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AllCardsService } from '../Services/all-cards/all-cards.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  scrollY: number=0

LogoLink='../../assets/Imges/NavImg/NavIcon2.svg';
GlobeLink='../../assets/Imges/NavImg/thirdImg.png';
ShowImg=false;
displayElement=false;
showLanguages=false;
navLang=this.navService.Languages;
chosenLang='GEO';
ProfileSettings;
NavElements=this.navService.MenuBar;
IsSignedIn:any;
staticElements;
showNav;
showRespNav={bool:false ,iconSrc:'../../assets/Imges/NavImg/list-outline.svg'};


  constructor(private router: Router , private navService: NavInfoService,private ngZone: NgZone,private EngService:EngService ,private GeoService:GeoService ,private RusService:RusService ,private allCardService:AllCardsService , private  Registration: RegistrationService,
    @Inject(PLATFORM_ID) private platformId: Object){

 
      this.IsSignedIn=this.navService.IsSignedIn;



  }
  

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('Language')) {
        this.chosenLang = localStorage.getItem('Language');
      }
    
      switch (this.chosenLang) {
        case 'GEO':
          this.staticElements = this.GeoService.NavG;
          this.NavElements=this.GeoService.MenuBar;
          
    this.ProfileSettings=this.GeoService.MenuBar.profileSettings;

          break;
    
        case 'ENG':
          this.staticElements = this.EngService.NavE;
          this.NavElements=this.EngService.MenuBar;
          this.ProfileSettings=this.EngService.MenuBar.profileSettings;
          break;
    
        case 'RUS':
          this.staticElements =this.RusService.NavR;
          this.NavElements=this.RusService.MenuBar;
          this.ProfileSettings=this.RusService.MenuBar.profileSettings;
          break;
    
    
      }
    }

    this.allCardService.fetchDataFromApi(); 
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.onRouteChange();
      });
    
 
    this.onRouteChange();

  }

  onRouteChange() {

    if (this.router.url === '/') {
   
      this.showNav = false;
    } else {
      this.showNav = true;
    }

    if (this.showNav) {
      this.LogoLink = '../../assets/Imges/NavImg/NavIcon2.svg';
      this.GlobeLink = '../../assets/Imges/NavImg/globeBlack.svg';
    } else {
      this.LogoLink = '../../assets/Imges/NavImg/NavIcon1.svg';
      this.GlobeLink = '../../assets/Imges/NavImg/thirdImg.png';
    }

    if (isPlatformBrowser(this.platformId)) {
      this.scrollToTop(0);
      }
  }

  chosenLanguage(element){
    localStorage.removeItem('Language');
    this.navService.chosenLang=this.navLang[element];

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
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {  

      this.scrollY = window.scrollY || window.pageYOffset; // Get the current scroll position

      if(this.scrollY>100 || this.showNav){
        this.LogoLink='../../assets/Imges/NavImg/NavIcon2.svg'
        this.GlobeLink='../../assets/Imges/NavImg/globeBlack.svg'
      }else{
        this.LogoLink='../../assets/Imges/NavImg/NavIcon1.svg'
        this.GlobeLink='../../assets/Imges/NavImg/thirdImg.png'
      }
  }
 
  showRegistrForm() {
    const scrollY = window.scrollY;
    document.body.classList.add('noscroll');
    document.body.style.top = `-${scrollY}px`;

    this.Registration.setDisplayer(true);
    window.document.body.style.overflow = "hidden";
  }

 navtoReg_Log( element ){
  console.log(element)
  if(element.chack=='Login'){
this.Registration.toggleLogin(true);
this.showRegistrForm()

  }else if(element.chack=='Register'){
    this.Registration.toggleLogin(false);
    this.showRegistrForm()
 }else if(element.chack=='User Panel' && !this.IsSignedIn.signed){
this.showRegistrForm()
element.route='/'
}
if(!element.chack){

  this.router.navigate([element.RouterLink])
}
}
  
  scrollToTop(duration: number = 600): void {
    const start = window.scrollY || window.pageYOffset; // Start position
    const startTime = performance.now(); // Get current time
    const documentHeight = document.documentElement.scrollHeight; // Total height
    const bodyHeight = document.body.scrollHeight; // Total height
    const maxScroll = Math.max(documentHeight, bodyHeight); // Maximum scrollable height
    const end = 0; // Target position
    const distance = end - start; // Distance to scroll
    const animation = (currentTime: number) => {
      const elapsed = currentTime - startTime; // Time elapsed
      const progress = Math.min(elapsed / duration, 1); // Progress between 0 and 1
      const position = start + distance * this.easeInOutCubic(progress);
      window.scrollTo(0, position);
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };
  
    // Start the animation
    requestAnimationFrame(animation);
  }
  
  // Easing function for smooth scrolling
   easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  uploadToLocal(info){
    if (localStorage.getItem('ActiveElement') =='Log Out'){ 
      localStorage.removeItem('id');
  
    } 
    this.router.navigate(['/Listing'])
    localStorage.setItem('ActiveElement',info)

  }
  profileSettings(el){
    if(el=='Log Out'){

   localStorage.removeItem('id');
   localStorage.removeItem('ActiveElement');
   this.router.navigate(['/'])
  //  window.location.reload();
  }else if(el=='Edit Profile'){

    localStorage.setItem('ActiveElement', 'Dashboard');
    this.router.navigate(['/Listing']);
    return;
  }
localStorage.setItem('ActiveElement', el)
this.router.navigate(['/Listing'])
}

  showResponsiveNav(){

    if(this.showRespNav.bool){
      this.showRespNav.bool=false;
      this.showRespNav.iconSrc='../../assets/Imges/NavImg/list-outline.svg'
  }else{
    this.showRespNav.bool=true;  

        this.showRespNav.iconSrc='../../assets/Imges/StaticImg/StaticIcons/x.svg'
  }
}

}




