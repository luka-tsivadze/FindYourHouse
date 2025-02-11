import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-featured-pr',
  templateUrl: './featured-pr.component.html',
  styleUrl: './featured-pr.component.scss'
})
export class FeaturedPRComponent {
 cardData = this.featuredProp.featuredProp;
 transformIndex = 0;
 staticvalues={
  header:'Featured Properties',
  area:'Area',
  rooms:'Rooms',
  beds:'Beds',
 }
  
    constructor(private featuredProp:PropertyInformationService ,private lang:LanguageChooserService) {
      this.staticvalues=this.lang.chosenLang.DetailedInfo.Featuredpr;
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