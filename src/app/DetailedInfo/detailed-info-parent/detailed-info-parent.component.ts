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
  typeof this.infoService.chosenCard.latitude === "string" &&
  typeof this.infoService.chosenCard.longitude === "string" &&
  (this.infoService.chosenCard.latitude as string).trim() !== "" &&
  (this.infoService.chosenCard.longitude as string).trim() !== "" &&
  !isNaN(parseFloat(this.infoService.chosenCard.latitude)) &&
  !isNaN(parseFloat(this.infoService.chosenCard.longitude));

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
