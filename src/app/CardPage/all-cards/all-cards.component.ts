import { Component } from '@angular/core';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';
import { AllCardsService } from '../../Services/all-cards/all-cards.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrl: './all-cards.component.scss'
})
export class AllCardsComponent {
  cards: any[] = [];
FeaturePS=this.mainPageService.featuredPropertiesStatic;

ActivePage = 0;
index = 0;
pagesInfo = [];
finalInfo = [];
activePage=[];
reviewIndices=[]
pageIndices=[]
pages;
dataState=false
amountOfCards=9;
  constructor(private navService:NavInfoService , private mainPageService:MainPageDataService ,private cardsService:AllCardsService) {
    this.navService.scrollobser.next(true);


}
ngOnInit() {
  this.cardsService.data$.subscribe((value) => {
    this.dataState = value; // React to updates
    console.log('dataState', this.dataState);
  });

}

ngAfterViewInit() {
  this.cardsService.fetchDataFromApi().subscribe((cards: any[]) => {
    this.cards = cards; // Set cards after fetching data
    this.pageFunction(); // Call pageFunction after cards are ready
  });
}
pageFunction() {
 
  

   
    this.pages = Math.ceil(this.cards.length /this.amountOfCards);
    
    for (let i = 0; i < this.pages; i++) {
      this.pageIndices.push(i);
      this.pagesInfo = []; // Reset for each page
      // Loop to add 6 items per page (or less for the last page)
      for (let j = 0; j < this.amountOfCards && this.index < this. cards.length; j++) {
        this.pagesInfo.push(this. cards[this.index]);
        this.index++;
      }
      // Clone the pagesInfo array before resetting it
      this.finalInfo.push([...this.pagesInfo]);
    }
  this.activePage=this.finalInfo[0]
    console.log('allCardEl', this.activePage);

}



chosenPage(index) {
if(this.finalInfo[index]){
this.activePage = this.finalInfo[index]
     console.log('index', this.activePage); 
  this.ActivePage = index;
}
}


}
