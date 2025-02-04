import { ChangeDetectorRef, Component } from '@angular/core';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';
import { AllCardsService } from '../../Services/all-cards/all-cards.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterDataUniterService } from '../../Services/filter-data-uniter/filter-data-uniter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
 staticElements = this.mainPageData.staticData.staticElements;
length = this.cardDataServ.CardsInfo.length;
filterOptions = this.cardDataServ.filter;
firstFilter=this.cardDataServ.FirstFilter;
Fortypes=this.mainPageData.staticData.staticElements.status;
for=this.mainPageData.For;
  maxArea;
maxPeice;
  activeEl='Top Selling';
  advenced=false;
filterForm: FormGroup;
sortingOptions = [{name:'Top Selling',state:true},
  {name:'Most Viewed',state:false},
  {name:'Price: Low to High',state:false}
  ,{name:'price: Hight to Low ',state:false}];
options=false  
constructor( private mainPageData:MainPageDataService ,private uniter:FilterDataUniterService, private cardDataServ:AllCardsService , private fb: FormBuilder, private changeRef:ChangeDetectorRef) { 
    this.updateTrackColor_1();
    this.updateTrackColor_2();
  }

showOptions(){
this.options=!this.options;
}
chosenOption(option){

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

ngOnInit(): void {

  this.filterForm = this.fb.group({

    propertyType: ['0'], //ქონების ტიპი
    location: ['0'], //მდებარეობა
    propertyStatus: ['0'], //ქონების სტატუსი
    bedrooms: ['0'],  //საძინებლების რაოდენობა
    bathrooms: ['0'],//სააბაზანოს რაოდენობა
    airConditioning: [false], //კონდიციონერი
    wifi: [false], //ვაი-ფაი
    swimmingPool: [false], //საცურაო აუზი
    tvCable: [false], //ტელევიზია
    centralHeating: [false],//ცენტრალური გათბობა
    dryer: [false],//საშრობი
    gym: [false], //სპორტული დარბაზი
    washer: [false], //სარეცხი მანქანა
    alarm: [false],//სიგნალიზაცია
    refrigerator: [false], //მაცივარი
    windowCovering: [false],//ფანჯრის საფარი
    outdoorShower: [false], //გარე დუში
    laundryRoom: [false], //სამრეცხაო ოთახი
    microwave: [false], // მიკროტალღური ღუმელი


  });


    this.cardDataServ.fetchDataFromApi().subscribe((data) => {
    this.length = data.length; // Update length with the total number of cards
  
 
      this.maxPeice = Math.max(...data.map(item => item.price.replace(/\D/g, '')));
      this.maxArea= Math.max(...data.map(item => item.area));
      console.log('maxPeice:', this.maxPeice , 'maxArea:', this.maxArea , 'rawest back_end_data i can get:', this.cardDataServ.back_end_data);
    
      this.sliderTwoValue_1 = this.maxArea;
      this.sliderTwoValue_2 = this.maxPeice;
      this.sliderMaxValue2= this.maxPeice;
      this.sliderMaxValue1= this.maxArea;
  });
  this.uniter.filtredCards$.subscribe((filteredCards) => {
    if ((!filteredCards || filteredCards.length === 0) && !this.uniter.wasCalled) {
      console.log('This was called by observer');
      return;
    }
    if (this.uniter.wasCalled) {
      this.length = filteredCards.length; // Update the length dynamically

    }

  });
 
  
}

 //double slider
 sliderOneValue_1 = 0;
  sliderTwoValue_1 = 20000;
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
  minGap2 = 5000;
  sliderMaxValue1 = 20000;
  sliderMaxValue2 = 600000;
 activeimg=true;



onSubmit() {
  this.filterForm.patchValue({ areaMin:  this.sliderOneValue_1  });
  this.filterForm.patchValue({ areaMax:  this.sliderTwoValue_1  });
  this.filterForm.patchValue({ priceMin:  this.sliderOneValue_2  });
  this.filterForm.patchValue({ priceMax:  this.sliderTwoValue_2  });
 
  this.uniter.transferData(this.filterForm.value, 2)
}
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
  

  list(){
    this.cardDataServ.setData(true); 
  this.activeimg=false;
  }
  grid(){
    this.cardDataServ.setData(false); 
    this.activeimg=true;
  }
}



