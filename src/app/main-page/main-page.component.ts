  import { Component, AfterViewInit, Inject, PLATFORM_ID, viewChild, ElementRef, ViewChild } from '@angular/core';
  import { isPlatformBrowser } from '@angular/common';
  import { NgZone } from '@angular/core';
  import { MainPageDataService } from '../Services/mainPageService/main-page-data.service';
  import { HostListener } from '@angular/core';
import { AllCardsService } from '../Services/all-cards/all-cards.service';

  @Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
  })
  export class MainPageComponent  {
[x: string]: any;

    popularPlacesData:{imgLink:string,cityName:string,properties:number}[]=this.dataService.popularPlacesData;
  staticData:{headerTextList:string[]}=this.dataService.staticData  


  @ViewChild('RCard')Relement: ElementRef | undefined;

  //for Line 114
  @ViewChild('cardPlace') cardRow: ElementRef;
  isDragging = false;
  startX = 0;
  scrollLeft = 0;  
  TransformCof=0;
  LC=1
//before 114 line

  transform:number=0;

    intervalId: any;
    booleanLeft=true;
    booleanRight=false;
    scrollY:any=0
    clickedIndex:number=0;
Languages=this.dataService
  WhyCards=this.dataService.WhyCards;
  AgentsInfo=this.dataService.AgentsInfo;
  lastEl:any;
ReviewsData=this.dataService.ReviewData;
DiscoverPopularPlaces=this.dataService.DiscoverPopularPlaces;


    constructor(@Inject(PLATFORM_ID) private platformId: Object,private allCardsService: AllCardsService, private zone: NgZone, private dataService: MainPageDataService) {
      
    

    }
        
  // ngOnInit(): void {
  //   this.allCardsService.data$.subscribe((data) => {
  //     console.log('Received data in component:', data);
  //       // Use the data as needed
  //   });
  // }

  

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
  buttons(element:any , index):void {
    if(this.lastEl){
this.lastEl.classList.remove('active');
    }
    this.clickedIndex=index;
element.classList.add('active');
this.lastEl=element;

  }
    ReviewMover(event:Event){
      const element = event.target as HTMLElement;
      const elementClass = element.className;
      const screenWidth = window.innerWidth;
      const cardWidth = screenWidth < 700 ? 316 : 515;
      const cardScreenCount =  screenWidth < 1000 ? 1 : screenWidth < 1400 ? 2 : 3;

      if(elementClass==='LeftBtn'|| elementClass=== 'Left'){ 
        this.transform += cardWidth;
      } else if(elementClass==='RightBtn' || elementClass=== 'Right'){
        this.transform -= cardWidth;
      }

      if(this.transform <= -(this.ReviewsData.length - cardScreenCount) * cardWidth){ 
        this.transform = 0;
      } else if(this.transform > 0){
        this.transform = -(this.ReviewsData.length - cardScreenCount) * cardWidth;
      }

      console.log(this.transform);
      this.Relement.nativeElement.style.transform = `translate3d(${this.transform}px, 0px, 0px)`;
    }
  @HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
    this.scrollY = window.scrollY || window.pageYOffset; // Get the current scroll position
}



onDragStart(event: MouseEvent) { 
  
  this.isDragging = true;
  this.startX = event.pageX - this.cardRow.nativeElement.offsetLeft;
  this.scrollLeft = this.cardRow.nativeElement.scrollLeft;
}

onDrag(event: MouseEvent) {


  if (!this.isDragging) return;
  event.preventDefault();

  // Calculate the movement
  const x = event.pageX - this.cardRow.nativeElement.offsetLeft;
  const walk = (x - this.startX) * 2; // scroll-fast

  // Update transform value
  this.transform += event.movementX;

  // Update scroll position
  this.cardRow.nativeElement.scrollLeft = this.scrollLeft - walk;
  
  // Apply transform without animation
  this.Relement.nativeElement.style.transition = '0s';
  this.Relement.nativeElement.style.transform = `translate3d(${this.transform}px, 0px, 0px)`;
}

onDragEnd() {
  if (!this.isDragging) return;
  this.isDragging = false;
  this.TransformCof = Math.round(this.transform / 515); // Rounds to nearest integer

  if(this.LC!==1){
    console.log(this.TransformCof , this.LC);
  if(this.LC>this.TransformCof){
    this.TransformCof=this.TransformCof-1;

  }else if(this.LC<this.TransformCof){
    this.TransformCof=this.TransformCof+1;

  }
}
this.LC=this.TransformCof;

  // Apply transform with animation
  this.transform = this.TransformCof * 515;
  if(this.transform>0){
    this.transform=-(this.ReviewsData.length-3)*515;
   
  }else if(this.transform<=-(this.ReviewsData.length-2)*515){
    this.transform=0;
  }
  this.Relement.nativeElement.style.transition = '0.8s';
  this.Relement.nativeElement.style.transform = `translate3d(${this.transform}px, 0px, 0px)`;
}



  }
