import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Inject, NgZone, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { MainPageDataService } from '../Services/mainPageService/main-page-data.service';


import { AllCardsService } from '../Services/all-cards/all-cards.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavInfoService } from '../Services/NavService/nav-info.service';
import { FilterDataUniterService } from '../Services/filter-data-uniter/filter-data-uniter.service';
import { PropertyInformationService } from '../Services/Property-info/property-information.service';
import { RegistrationService } from '../Services/registration/registration.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  popularPlacesData:{imgLink:string,cityName:string,properties:number,cityCode:string}[]=[];

  staticData:{
[x: string]: any;headerTextList:string[]
}=this.dataService.staticData  

  @ViewChild('headerElement')headerElement!: ElementRef;

For=this.dataService.For;

  list: any;

    counter: number = 0;
  
    intervalId: any;
    booleanLeft=true;
    booleanRight=false;
    scrollY:any=0
    clickedIndex:number=0;
staticElements=this.dataService.staticData.staticElements
popularPropStatic=this.dataService.popularPlacesStatic
screenWidth: number = window.innerWidth;
allProperties: any[]; // Stores full dataset
    FeatureProperties;
   FeaturePS=this.dataService.featuredPropertiesStatic;
   advenced=false;
allcardsData=this.allcard;
index=0;
heartIndex;
filterForm = this.fb.group({
  Propselect: ['0'], // Default value: none selected
  locselect: ['0'], // Default value: none selected
  propstatus:['0'],

});
    constructor(@Inject(PLATFORM_ID) private platformId: Object,private navserv:NavInfoService, 
    private http:HttpClient ,private Propinfo:PropertyInformationService ,private router:Router ,private fb: FormBuilder , private cd: ChangeDetectorRef 
   ,private uniter:FilterDataUniterService , private Registration:RegistrationService 
    ,private allcard:AllCardsService, private dataService: MainPageDataService )
     {

    }


    onSubmit() {
      if (this.filterForm.valid) {
        this.allcard.formValue=this.filterForm.value;
          this.submitChildData();
   
        // Process formData as needed
      } 
    }

    heartedCards;
    ngOnInit(): void {
      // this.setActive(0 , 'For Sale');
      this.allcard.fetFavchData(this.navserv.userId).subscribe({
        next: (filteredData) => {
      
        this.heartedCards = filteredData;
        this.fetchData();
        },
        error: (error) => console.error('Error:', error),
   
      });
      this.dataService.popularPlacesData$.subscribe(data => {
        this.popularPlacesData = data;
    
      });
  
      this.dataService.cityAmount();
     
    
    }
      heartimg='../../../assets/Imges/Header/CardImges/icons/heart.svg'
      heartFilled='./../../assets/Imges/StaticImg/StaticIcons/heart-fill - red.svg'
      heartimgLinks=[this.heartimg,this.heartimg,this.heartimg,this.heartimg,this.heartimg,this.heartimg,this.heartimg,this.heartimg]

      getMatchingIndexes(savedCards: any[], allCards: any[]): void {
        const savedCardIds = new Set(savedCards.map(saved => saved.id));
      
        // Filter only matching cards to reduce iteration
        allCards
          .map((card, index) => ({ card, index }))
          .filter(({ card }) => savedCardIds.has(card.gncxdebis_idi))
          .forEach(({ index }) => {
            this.heartimgLinks[index] = this.heartFilled;
          });
      }
      
      
      

      saveToFav(i:number , info){
        if(this.navserv.userId===null){
          window.document.body.style.overflow = "hidden";
          this.Registration.setDisplayer(true);
          return;
         }
      const momxmareblis_idi= this.navserv.userId
      const gancxadebis_idi=info.gncxdebis_idi
      const postBody={momxmareblis_idi,gancxadebis_idi}
      if(this.heartimgLinks[i]===this.heartimg){
          this.heartimgLinks[i]=this.heartFilled;
   

        
        this.allcard.sendFavoriteCards(postBody);
    
        }
        else{// write remove function of api 
    this.allcard.DeleteFavoriteCards(postBody);
          
          this.heartimgLinks[i]=this.heartimg;
        }

  }
  
    @HostListener('window:resize', ['$event']) 
    onResize() {
      this.screenWidth = window.innerWidth;
      this.updateVisibleItems(); // Update data on screen resize
    }
  
    fetchData(): void {
// console.log('Fetching data...' + this.allProperties.length)
// ;
//       if (this.allProperties.length !== 0) {
// return;
// }//need behavior subject to Store data

      this.http.get<any[]>('get_main_houses.php').subscribe({
        next: (data) => {
          if (!Array.isArray(data)) {
            console.error('API did not return an array:', data);
            return;
          }
  
          this.allProperties = data.map((item) => {
            let images: string[] = [];
            let firstimg: string | null = null;
            
            // ✅ Handle JSON errors safely
            try {
              images = JSON.parse(item.fotoebi || '[]');
              firstimg = Array.isArray(images) && images.length > 0
                ? `houses/${item.amtvirtvelis_maili}/${item.gancxadebis_saidentifikacio_kodi}/photos/${images[0]}`
                : null;
            } catch (error) {
              console.error('Invalid JSON in fotoebi:', item.fotoebi);
            }
           
            return {
              featuredBtn: item.featuredBtn,
              imgLink: firstimg,
              gncxdebis_idi: item.idi,
              price: item.fasi + item.fasis_valuta,
              header: item.satauri,
              location: item.misamarti,
              bedrooms: item.sadzinebeli,
              bathrooms: item.sveli_wertilebis_raodenoba,
              area: item.fartobi,
              garages: 0,
              For: item.garigebis_tipi,
              profileImg: '../../../assets/Imges/StaticImg/CardImges/ts-6.jpg',
              profileName: item.momxmareblis_saxeli,
              alt: item.satauri,
              uploadmonth: 3,
              momxmreblis_idi: item.amtvirtvelis_idi,
            };
          
          });
        this.getMatchingIndexes(this.heartedCards, this.allProperties);
 
          this.updateVisibleItems(); // Apply responsive limit
        },
        error: (error) => {
          console.error('Error fetching properties:', error);
        },
        complete: () => {
         
        }
      });
    }
    
    navigate(id){
      this.Propinfo.navigateToCard(id);
    }
  
    updateVisibleItems(): void {
      if (this.screenWidth < 1280) {
        this.FeatureProperties = this.allProperties.slice(0, 4); // Show 4 items
      } else {
        this.FeatureProperties = this.allProperties.slice(0, 8); // Show 8 items
      }
      this.cd.detectChanges(); // Ensure UI updates
    }
    submitChildData() {
   
      
      this.allcard.triggerSubmit();
  this.router.navigate(['/allCards']);    
      }
   
    advanced(){
      this.advenced=!this.advenced;

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



    activeElement:number | null = -1; // this does not matter change submit in construction 
    arrowClass: string = 'dNone'; // Class to apply to the Sarrow div

    // Map button indices to specific classes
    arrowClassMap: { [key: number]: string } = {
      0: 'left',   
      1: 'left-1',
      2: 'middle', 
      3: 'right',   
      4: 'right-1'  
    };
  setActive(index: number ,el): void {
  this.activeElement = index; 
  this.arrowClass = this.arrowClassMap[index] || '';

this.filterForm.patchValue({propstatus:el})

}
onSelectChange(event: Event): void {
  const selectedValue = (event.target as HTMLSelectElement).value;
  this.filterForm.patchValue({propstatus:selectedValue})
}

 
  @HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
    this.scrollY = window.scrollY || window.pageYOffset; 
}

goToCity(location: string): void {
  

  if (!location || location === '0') {
    return; // If the location is 0 (default), do nothing
  }

  this.uniter.transferData({ locselect: location }, 1);
  this.router.navigate(['/allCards']);
}

ngOnDestroy(): void {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
  
}
}
