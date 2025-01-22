import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';
import { MainPageDataService } from '../Services/mainPageService/main-page-data.service';
import { EngService } from '../Services/Languages/Eng/eng.service';
import { GeoService } from '../Services/Languages/geo/geo.service';
import { RusService } from '../Services/Languages/rus/rus.service';
import { AllCardsService } from '../Services/all-cards/all-cards.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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

    FeatureProperties;
   FeaturePS=this.dataService.featuredPropertiesStatic;
   advenced=false;
allcardsData=this.allcard;
filterForm = this.fb.group({
  Propselect: ['0'], // Default value: none selected
  locselect: ['0'], // Default value: none selected
  propstatus:['0'],
});
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private http:HttpClient , private router:Router ,private fb: FormBuilder , private cd: ChangeDetectorRef ,private allcard:AllCardsService, private zone: NgZone, private dataService: MainPageDataService , private EngServic:EngService,  private GeoService:GeoService ,private RusService:RusService ) {
      this.setActive(0 , 'For Sale');
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
     
        this.FeatureProperties = data.slice(0, 6);

        this.cd.detectChanges(); // Trigger UI updates here
      });
      this.http.get('get_main_houses.php').subscribe((data) => {
           console.log('this should be 8 element long data: ',data);
      }) ;

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

    ngOnDestroy(): void {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      
    }


    activeElement:number | null = 0; // this does not matter change submit in construction 
    arrowClass: string = ''; // Class to apply to the Sarrow div

    // Map button indices to specific classes
    arrowClassMap: { [key: number]: string } = {
      0: 'left',   
      1: 'left-1',
      2: 'middle', 
      3: 'right',   
      4: 'right-1'  
    };
  setActive(index: number ,el): void {
  this.activeElement = index; // Set the active button
  this.arrowClass = this.arrowClassMap[index] || ''; // Set the corresponding class for Sarrow

this.filterForm.patchValue({propstatus:el})
}
    

 
  @HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
    this.scrollY = window.scrollY || window.pageYOffset; // Get the current scroll position
}

}
