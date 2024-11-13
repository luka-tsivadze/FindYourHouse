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
    this.updateTrackColor_1();
    this.updateTrackColor_2();
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
 
 //double slider
 sliderOneValue_1 = 0;
  sliderTwoValue_1 = 1300;
  showSliderOne_1 = true;
  showSliderTwo_1 = true;
  trackStyle_1: { [key: string]: string };
  
  // Second wrapper slider properties
  sliderOneValue_2 = 0;
  sliderTwoValue_2 = 600000;
  showSliderOne_2 = true;
  showSliderTwo_2 = true;
  trackStyle_2: { [key: string]: string };
  
  minGap1 = 25;
  minGap2 = 10000;
  sliderMaxValue1 = 1300;
  sliderMaxValue2 = 600000;



  // First wrapper slider methods
  slideOne_1(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = parseInt(target.value);
    if (this.sliderTwoValue_1 - newValue <= this.minGap1) {
      this.sliderOneValue_1 = this.sliderTwoValue_1 - this.minGap1;
      target.value = this.sliderOneValue_1.toString();
    } else {
      this.sliderOneValue_1 = newValue;
    }
    this.showSliderOne_1 = this.sliderOneValue_1 < this.sliderTwoValue_1;
    this.updateTrackColor_1();
  }

  slideTwo_1(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = parseInt(target.value);
    if (newValue - this.sliderOneValue_1 <= this.minGap1) {
      this.sliderTwoValue_1 = this.sliderOneValue_1 + this.minGap1;
      target.value = this.sliderTwoValue_1.toString();
    } else {
      this.sliderTwoValue_1 = newValue;
    }
    this.showSliderTwo_1 = this.sliderTwoValue_1 > this.sliderOneValue_1;
    this.updateTrackColor_1();
  }

  updateTrackColor_1() {
    const percent1 = (this.sliderOneValue_1 / this.sliderMaxValue1) * 100;
    const percent2 = (this.sliderTwoValue_1 / this.sliderMaxValue1) * 100;
    this.trackStyle_1 = {
      background: `linear-gradient(to right, #dadae5 ${percent1}%, #FF385C ${percent1}%, #FF385C ${percent2}%, #dadae5 ${percent2}%)`
    };
  }

  // Second wrapper slider methods
  slideOne_2(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = parseInt(target.value);
    if (this.sliderTwoValue_2 - newValue <= this.minGap2) {
      this.sliderOneValue_2 = this.sliderTwoValue_2 - this.minGap2;
      target.value = this.sliderOneValue_2.toString();
    } else {
      this.sliderOneValue_2 = newValue;
    }
    this.showSliderOne_2 = this.sliderOneValue_2 < this.sliderTwoValue_2;
    this.updateTrackColor_2();
  }

  slideTwo_2(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = parseInt(target.value);
    if (newValue - this.sliderOneValue_2 <= this.minGap2) {
      this.sliderTwoValue_2 = this.sliderOneValue_2 + this.minGap2;
      target.value = this.sliderTwoValue_2.toString();
    } else {
      this.sliderTwoValue_2 = newValue;
    }
    this.showSliderTwo_2 = this.sliderTwoValue_2 > this.sliderOneValue_2;
    this.updateTrackColor_2();
  }

  updateTrackColor_2() {
    const percent1 = (this.sliderOneValue_2 / this.sliderMaxValue2) * 100;
    const percent2 = (this.sliderTwoValue_2 / this.sliderMaxValue2) * 100;
    this.trackStyle_2 = {
      background: `linear-gradient(to right, #dadae5 ${percent1}%, #FF385C ${percent1}%, #FF385C ${percent2}%, #dadae5 ${percent2}%)`
    };
  }
  
}



