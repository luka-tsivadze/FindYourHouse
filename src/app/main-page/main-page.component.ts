  import { Component, AfterViewInit, Inject, PLATFORM_ID, viewChild, ElementRef, ViewChild, OnInit } from '@angular/core';
  import { isPlatformBrowser } from '@angular/common';
  import { NgZone } from '@angular/core';
  import { MainPageDataService } from '../Services/mainPageService/main-page-data.service';
  import { HostListener } from '@angular/core';
import { AllCardsService } from '../Services/all-cards/all-cards.service';
import { PropertyInformationService } from '../Services/Property-info/property-information.service';
import { NavInfoService } from '../Services/NavService/nav-info.service';
import { concatMap } from 'rxjs';
import { AgentsService } from '../Services/agents/agents.service';

  @Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
  
  })
  export class MainPageComponent implements OnInit {
[x: string]: any;

    // popularPlacesData:{imgLink:string,cityName:string,properties:number}[]=this.dataService.popularPlacesData;
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
  AgentsInfo=this.dataService.AgentsInfo; //defoult value
  lastEl:any;
ReviewsData=this.dataService.ReviewData;
DiscoverPopularPlaces=this.dataService.DiscoverPopularPlaces;


    constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private allCardsService: AllCardsService,
     private navService:NavInfoService,
    private Propinfo:PropertyInformationService ,
    private agentsServ:AgentsService, private dataService: MainPageDataService) {
      
    

    }
    heartimg='../../assets/Imges/Header/CardImges/icons/heart.svg'
    heartimgLinks=[ this.heartimg ,  this.heartimg, this.heartimg,  this.heartimg, this.heartimg, this.heartimg, this.heartimg, this.heartimg, this.heartimg];
  heartFilled='../../assets/Imges/StaticImg/StaticIcons/heart-fill - red.svg'
  heartedCards;

  ngOnInit(): void {
    this.dataService.getDiscoveredProperties().pipe(
      concatMap((data) => {
      this.DiscoverPopularPlaces = data;
      return this.allCardsService.fetFavchData(this.navService.userId);
      })
    ).subscribe({
      next: (cards: any[]) => {
      this.heartedCards = cards;
      // this.heartimgLinks = new Array(this.DiscoverPopularPlaces.length).fill(this.heartimg);
      this.getMatchingIndexes(this.heartedCards, this.DiscoverPopularPlaces);
      },
      error: (error) => {
      console.error('Error:', error);
      },
      complete: () => {
      console.log('Request completed');
      },
    });

    this.agentsServ.fetchAgentData().subscribe({
      next: (data) => {
        this.AgentsInfo=[];
        data.map((item,index)=>{
 const imgLink = item.foto ? `users/${item.maili}/${item.saidentifikacio_kodi}/${item.foto}` : '../../assets/Imges/Header/CardImges/A-1.jpg';

          this.AgentsInfo.push({
// `users/${data[0].maili}/${data[0].saidentifikacio_kodi}/${data[0].foto}
  mainalt:item.angarishis_tipi || 'AgentsCard',

    imgLink:imgLink,

  Name: `${item.saxeli} ${item.gvari}` || 'Carls Issue',
  status:item.angarishis_tipi == 'gayidvebis_menejeri'?  'Real Estate Agent' : 'Real Estate Manager', 
  sociaslLinks:[
    ...(item.facebook_linki ? [{alt:'facebook' ,href:item.facebook_linki,IconLink:'../../assets/Imges/Header/CardImges/icons/icons8-facebook.svg'}] : []),
    ...(item.twitter_linki ? [{alt:'twitter' ,href:item.twitter_linki,IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg'}] : []),
    ...(item.instagram_linki ? [{alt:'Instagram' ,href:item.instagram_linki,IconLink:'../../assets/Imges/Header/CardImges/icons/instagram.svg'}] : []),
    ...(item.linkedin_linki ? [{alt:'linkdIn' ,href:item.linkedin_linki,IconLink:'../../assets/Imges/Header/CardImges/icons/LinkedIn.png'}] : []),
    ...(item.whatsapp_linki ? [{alt:'twitter' ,href:item.twitter_linki,IconLink:'../../assets/Imges/Header/CardImges/icons/twitter.svg'}] : []), 
  ]
})

})

      },
      error: (err) => console.error('Error fetching agents:', err)
    }); 
    } 


    getMatchingIndexes(savedCards: any[], allCards: any[]): void {
      console.log('saved:', savedCards, 'allcards:', allCards);
    
      // ✅ Prevent errors by waiting until allCards is loaded
      if (!allCards || !Array.isArray(allCards) || allCards.length === 0) {
        console.warn('getMatchingIndexes skipped: allCards is empty or not loaded yet.');
        return;
      }
    
      if (!savedCards || !Array.isArray(savedCards)) {
        console.error('Error: savedCards is null or not an array', savedCards);
        return;
      }
    
      if (!this.heartimgLinks.length) {
        this.heartimgLinks = new Array(allCards.length).fill(this.heartimg);
      }
    
      savedCards.forEach(savedCard => {
        const index = allCards.findIndex(card => card.gncxdebis_idi == savedCard.id);
        if (index !== -1) {
          this.heartimgLinks[index] = this.heartFilled;
        }
      });
    }
    
    
  navigate(id){
    this.Propinfo.navigateToCard(id);
  }


  saveToFav(i:number , info){  
 
    const momxmareblis_idi= this.navService.userId
    const gancxadebis_idi=info.gncxdebis_idi
    const postBody={momxmareblis_idi,gancxadebis_idi}
    if(this.heartimgLinks[i]===this.heartimg){
        this.heartimgLinks[i]=this.heartFilled;
 
          
   this.allCardsService.sendFavoriteCards(postBody)
      
  
      }
      else{// write remove function of api 
        this.allCardsService.DeleteFavoriteCards(postBody);
        this.heartimgLinks[i]=this.heartimg;
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
  buttons(element:any , index):void {
    if(this.lastEl){
this.lastEl.classList.remove('active');
    }
    this.clickedIndex=index;
element.classList.add('active');
// this.Relement.nativeElement.style.transform = `translate3d(${this.transform}px, 0px, 0px)`;
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
  this.TransformCof = Math.round(this.transform / 515); 

  if(this.LC!==1){

  if(this.LC>this.TransformCof){
    this.TransformCof=this.TransformCof-1;

  }else if(this.LC<this.TransformCof){
    this.TransformCof=this.TransformCof+1;

  }
}
this.LC=this.TransformCof;


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
