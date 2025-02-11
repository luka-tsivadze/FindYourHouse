import { Component } from '@angular/core';
import { AllCardsService } from '../../Services/all-cards/all-cards.service';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-card-gallery1',
  templateUrl: './card-gallery1.component.html',
  styleUrl: './card-gallery1.component.scss'
})
export class CardGallery1Component {
staticH2='Gallery';
 data = this.cardInfo.chosenCard;
 ForActive=0;
 priceForM=Math.round(Number(this.data.purePrice)/Number(this.data.area)) + this.data.currency || 'GEL';
 mainImg=this.cardInfo.chosenCard.img[this.ForActive];
  constructor( private cardInfo:PropertyInformationService ,private lang:LanguageChooserService) {
this.staticH2=this.lang.chosenLang.DetailedInfo.CardGallery1;
   }

  ngOnInit(): void {
  }
  setIndex(index){
    this.ForActive=index;
    this.mainImg=this.cardInfo.chosenCard.img[this.ForActive];
  }
incriment(){
  if(this.ForActive<this.cardInfo.chosenCard.img.length-1){
    this.ForActive++;
    this.mainImg=this.cardInfo.chosenCard.img[this.ForActive];
  }else{
    this.ForActive=0;
    this.mainImg=this.cardInfo.chosenCard.img[this.ForActive];
  }
}
decriment(){
  if(this.ForActive>0){
    this.ForActive--;
    this.mainImg=this.cardInfo.chosenCard.img[this.ForActive];
  }else{
    this.ForActive=this.cardInfo.chosenCard.img.length-1;
    this.mainImg=this.cardInfo.chosenCard.img[this.ForActive];
  }
}

}
