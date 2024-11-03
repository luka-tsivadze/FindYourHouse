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
filterOptions = this.cardDataServ.filter;
  activeEl='Top Selling';
  advenced=false;
sortingOptions = [{name:'Top Selling',state:true},

  {name:'Most Viewed',state:false},
  {name:'Price: Low to High',state:false}
  ,{name:'price: Hight to Low ',state:false}];
options=false  
constructor( private mainPageData:MainPageDataService , private cardDataServ:AllCardsService) { 
     
  }

showOptions(){
this.options=!this.options;
}
chosenOption(option){
  console.log(option)
  this.sortingOptions.forEach(element => {
    element.state=false;
  });
  option.state=true;
  this.options=false;
    this.activeEl=option.name;
}
advanced(){
  this.advenced=!this.advenced;
}



}
