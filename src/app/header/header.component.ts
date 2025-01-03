import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';
import { MainPageDataService } from '../Services/mainPageService/main-page-data.service';
import { EngService } from '../Services/Languages/eng/eng.service';
import { GeoService } from '../Services/Languages/geo/geo.service';
import { RusService } from '../Services/Languages/rus/rus.service';
import { AllCardsService } from '../Services/all-cards/all-cards.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

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
    FeatureProperties;
   FeaturePS=this.dataService.featuredPropertiesStatic;
   advenced=false;
allcardsData=this.allcard;
filterForm = this.fb.group({
  searchText: [''], // Default value: empty
  Propselect: [''], // Default value: none selected
  locselect: [''], // Default value: none selected
});
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private fb: FormBuilder , private cd: ChangeDetectorRef ,private allcard:AllCardsService, private zone: NgZone, private dataService: MainPageDataService , private EngServic:EngService,  private GeoService:GeoService ,private RusService:RusService ) {

    }
    onSubmit() {
      if (this.filterForm.valid) {
        const formData = this.filterForm.value;

        this.allcard.formValue=this.filterForm.value;
          this.submitChildData();
      
        // Process formData as needed
      } else {
        console.warn('Form is invalid');
      }
    }
    ngOnInit(): void {
      this.dataService.getFeaturedProperties().subscribe((data) => {
        console.log('Fetched Data:', data);
        this.FeatureProperties = data.slice(0, 6);

        this.cd.detectChanges(); // Trigger UI updates here
      });
    }
    submitChildData() {
   
      console.log(this.filterForm.value);
      this.allcard.triggerSubmit();
    }
   
    advanced(){
      this.advenced=!this.advenced;
      console.log('this should activate another log');  
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
