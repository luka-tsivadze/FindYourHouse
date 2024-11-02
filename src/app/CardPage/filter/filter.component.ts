import { Component } from '@angular/core';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';
import { AllCardsService } from '../../Services/all-cards/all-cards.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
 staticElements = this.mainPageData.staticData.staticElements;
length = this.cardDataServ.CardsInfo.length;
options=false  
constructor( private mainPageData:MainPageDataService , private cardDataServ:AllCardsService) { 
     
  }

showOptions(){
this.options=!this.options;
}
}
