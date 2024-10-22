import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';
import { MainPageDataService } from '../Services/mainPageService/main-page-data.service';
import { EngService } from '../Services/Languages/eng/eng.service';
import { GeoService } from '../Services/Languages/geo/geo.service';
import { RusService } from '../Services/Languages/rus/rus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  popularPlacesData:{imgLink:string,cityName:string,properties:number}[]=this.dataService.popularPlacesData;
  staticData:{
[x: string]: any;headerTextList:string[]
}=this.dataService.staticData  

  @ViewChild('headerElement')headerElement!: ElementRef;


 
  list: any;
  
    counter: number = 0;
  
    intervalId: any;
    booleanLeft=true;
    booleanRight=false;
    scrollY:any=0
    clickedIndex:number=0;
staticElements=this.dataService.staticData.staticElements
popularPropStatic=this.dataService.popularPlacesStatic
    FeatureProperties=this.dataService.FeaturedProp;
   FeaturePS=this.dataService.featuredPropertiesStatic;
 



    constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone, private dataService: MainPageDataService , private EngServic:EngService,  private GeoService:GeoService ,private RusService:RusService ) {
   
    }

    ngAfterViewInit(): void {
  
    
        this.animateHeaderText(this.staticData.headerTextList);
      
    }

    animateHeaderText(headerText: string[]): void {

      let sec=0
      if (isPlatformBrowser(this.platformId)) {
        this.intervalId = setInterval(() => {
          this.list = headerText[this.counter].split('');
          this.counter = (this.counter + 1) % headerText.length;
        
        this.headerElement.nativeElement.innerHTML='';
        this.list.forEach((char: string) => {
          const p = document.createElement('p');
          p.className = 'ptext';
    
          p.textContent ='  '+char;
        
          const typingAnimation = document.createElement('style');
          typingAnimation.type = 'text/css';
          typingAnimation.innerHTML = `
          @keyframes typing {
            0% { width: 0;
            opacity: 0;
            }
            
            100%{ width: 100%;
            opacity: 1;
          }
          `;        
          document.head.appendChild(typingAnimation);
          p.style.width='0'
          p.style.opacity='0'
          p.style.animation = 'typing 0.3s forwards'; 
            sec=sec+0.1;
        
            p.style.animationDelay = `${sec}s`;
          p.style.position = 'relative'; 
          
          this.headerElement.nativeElement.appendChild(p);
        });
      sec=0;
    
        }, 3000);
    
      }
    }

    ngOnDestroy(): void {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      
    }

  activeRight(){
    this.booleanLeft=false;
    this.booleanRight=true;
  }
  activeLeft(){
    this.booleanLeft=true;
    this.booleanRight=false;
   
  }

 
  @HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
    this.scrollY = window.scrollY || window.pageYOffset; // Get the current scroll position
}

}
