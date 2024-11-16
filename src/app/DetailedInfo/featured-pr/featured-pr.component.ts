import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

@Component({
  selector: 'app-featured-pr',
  templateUrl: './featured-pr.component.html',
  styleUrl: './featured-pr.component.scss'
})
export class FeaturedPRComponent {
 cardData = this.featuredProp.featuredProp;
 transformIndex = 0;
  
    constructor(private featuredProp:PropertyInformationService) {
      
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