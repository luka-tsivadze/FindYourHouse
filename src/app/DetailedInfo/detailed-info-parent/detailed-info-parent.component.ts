import { Component } from '@angular/core';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewsService } from '../../Services/views/views.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-detailed-info-parent',
  templateUrl: './detailed-info-parent.component.html',
  styleUrl: './detailed-info-parent.component.scss'
})
export class DetailedInfoParentComponent {
descH='Description';
displayR=false;
  description=this.infoService.chosenCard.describtion;
showPropVideo=this.infoService.video;
floorplan=this.infoService.floorimg;
scrollPosition = 0;
mapvalidity: boolean = 
  !isNaN(parseFloat(this.infoService.chosenCard.latitude.toString())) &&
  !isNaN(parseFloat(this.infoService.chosenCard.longitude.toString()));



  constructor(private navService:NavInfoService ,private infoService:PropertyInformationService , 
     private route: ActivatedRoute, private views:ViewsService ,private lang:LanguageChooserService ,private navigation:Router) {

     

  }
  
  
  ngOnInit(): void {


    this.descH=this.lang.chosenLang.DetailedInfo.parent;
    let cardId = JSON.parse(this.route.snapshot.paramMap.get('id'));
    console.log(cardId);
    this.infoService.setCardId(cardId);

    if(this.infoService.chosenCard){
    this.navService.scrollobser.next(true);
   }
    this.views.sendView(this.infoService.chosenCard.id); // send view to the server

    window.addEventListener('scroll', () => {
      this.scrollPosition = window.scrollY;

    });
  }
  
  ActiveD(){
  this.displayR=!this.displayR;
}
  
}
