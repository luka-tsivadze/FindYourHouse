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
  constructor(private navService:NavInfoService ,private infoService:PropertyInformationService ,  private route: ActivatedRoute,) {
if(infoService.chosenCard){
    this.navService.scrollobser.next(true);
   }
 console.log('Card:', this.infoService.chosenCard);

  }
  ngOnInit(): void {
    // Extract the 'id' from the route
    const cardId = this.route.snapshot.paramMap.get('id');
  

    // Pass the 'id' to the service
    this.infoService.setCardId(cardId);
  }
}
