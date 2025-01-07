import { Component } from '@angular/core';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-info-parent',
  templateUrl: './detailed-info-parent.component.html',
  styleUrl: './detailed-info-parent.component.scss'
})
export class DetailedInfoParentComponent {

  description=this.infoService.chosenCard.describtion;
showPropVideo=this.infoService.chosenCard.videoLink;
mapvalidity = 
  !isNaN(Number(this.infoService.chosenCard.latitude)) && 
  !isNaN(Number(this.infoService.chosenCard.longitude)) &&
  this.infoService.chosenCard.latitude !== null && 
  this.infoService.chosenCard.longitude !== null;

  constructor(private navService:NavInfoService ,private infoService:PropertyInformationService ,  private route: ActivatedRoute,) {
  
    let cardId = JSON.parse(this.route.snapshot.paramMap.get('id'));
    this.infoService.setCardId(cardId);

    if(infoService.chosenCard){
    this.navService.scrollobser.next(true);
   }
 console.log('Card:', this.infoService.chosenCard);

  }
  ngOnInit(): void {
    // Extract the 'id' from the route
 
  
    
    // Pass the 'id' to the service
  }

  
}
