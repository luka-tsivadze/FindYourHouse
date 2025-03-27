import { Component, OnInit } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { AllCardsService } from '../../Services/all-cards/all-cards.service';

@Component({
  selector: 'app-similar-prop',
  templateUrl: './similar-prop.component.html',
  styleUrl: './similar-prop.component.scss'
})
export class SimilarPropComponent implements OnInit {
 simProp='Similar Properties'
data=this.Infoservice.similarProp;
FeaturePS=this.staticInfo.featuredPropertiesStatic;
 heartimg='../../../assets/Imges/Header/CardImges/icons/heart.svg';
  heartFilled='./../../../assets/Imges/StaticImg/StaticIcons/heart-fill - red.svg';
  heartimgLinks=[];
chosenCard=this.Infoservice.chosenCard;
  constructor(private Infoservice:PropertyInformationService, private staticInfo:MainPageDataService ,
    private lang:LanguageChooserService ,private navService:NavInfoService , private cardsService:AllCardsService) {
    this.simProp=this.lang.chosenLang.DetailedInfo.simProp;
  }
  ngOnInit(): void {
    this.Infoservice.chosenCard.subscribe((data)=>{
  console.log( 'this is simillar prop',data.similarProp);
    })
  }

  routertodetailedInfo(cardId: number): void {
    this.Infoservice.navigateToCard(cardId);
  }
  saveToFav(i:number , info){
   
 
    const momxmareblis_idi= this.navService.userId
    const gancxadebis_idi=info.id
    const postBody={momxmareblis_idi,gancxadebis_idi}
    if(this.heartimgLinks[i]===this.heartimg){
        this.heartimgLinks[i]=this.heartFilled;
 
          
   this.cardsService.sendFavoriteCards(postBody)
      
  
      }
      else{// write remove function of api 
           this.cardsService.DeleteFavoriteCards(postBody);
        this.heartimgLinks[i]=this.heartimg;
      }

}
}
