  import { Component, AfterViewInit, Inject, PLATFORM_ID, viewChild, ElementRef, ViewChild } from '@angular/core';
  import { isPlatformBrowser } from '@angular/common';
  import { NgZone } from '@angular/core';
  import { MainPageDataService } from '../Services/mainPageService/main-page-data.service';
  import { HostListener } from '@angular/core';

  @Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
  })
  export class MainPageComponent implements AfterViewInit {
[x: string]: any;

    popularPlacesData:{imgLink:string,cityName:string,properties:number}[]=this.dataService.popularPlacesData;
  staticData:{headerTextList:string[]}=this.dataService.staticData  
  @ViewChild('bt') bt: ElementRef | undefined;
  @ViewChild('headerElement')headerElement!: ElementRef;
  list: any;
    counter: number = 0;
    headertimer=1000;
    intervalId: any;
    booleanLeft=true;
    booleanRight=false;
    scrollY:any=0
    clickedIndex:number=0;
  FutureProperties=this.dataService.FeaturedProp;
  WhyCards=this.dataService.WhyCards;
  AgentsInfo=this.dataService.AgentsInfo;
  lastEl:any;
ReviewsData=this.dataService.ReviewData;
DiscoverPopularPlaces=this.dataService.DiscoverPopularPlaces;
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone, private dataService: MainPageDataService) {
   console.log(this.DiscoverPopularPlaces);
     
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
    console.log(this.bt);
  }
  buttons(element:any , index):void {
    if(this.lastEl){
this.lastEl.classList.remove('active');
    }
    this.clickedIndex=index;
element.classList.add('active');
this.lastEl=element;

  }
  @HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
    this.scrollY = window.scrollY || window.pageYOffset; // Get the current scroll position
}




  }
