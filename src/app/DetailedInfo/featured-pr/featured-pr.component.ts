import { Component, OnInit } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';

@Component({
  selector: 'app-featured-pr',
  templateUrl: './featured-pr.component.html',
  styleUrl: './featured-pr.component.scss'
})
export class FeaturedPRComponent  implements OnInit {
 cardData = this.featuredProp.featuredProp;
 transformIndex = 0;
 staticvalues={
  header:'Featured Properties',
  area:'Area',
  rooms:'Rooms',
  beds:'Beds',
 }
  
    constructor(private featuredProp:PropertyInformationService ,private lang:LanguageChooserService, private mainService:MainPageDataService){
      this.staticvalues=this.lang.chosenLang.DetailedInfo.Featuredpr;
     }

 ngOnInit(){ 
    this.mainService.getDiscoveredProperties().subscribe((data) => {
      if(!data){
 
        this.cardData = this.featuredProp.featuredProp;
        return;
      }
     
      this.cardData = data.map((item) => {
        return {
          img: item.imgLink,
          type: item.header,
          price: item.price,
          For: item.For,
          locationCity: item.location,
          area: item.area,
          rooms: item.bathrooms,
          bedrooms: item.bedrooms,
        };
      });
    });
}
    

leftTransform(){
  if(this.transformIndex > 0){
  this.transformIndex = this.transformIndex - 330;
}else{
  this.transformIndex = 0;

this.transformIndex=(this.cardData.length-1)*330;
}
 
}
RightTransform(){
  if(this.transformIndex < (this.cardData.length-1)*330){
  this.transformIndex = this.transformIndex + 330;
}else{
  this.transformIndex = 0;}

}
}