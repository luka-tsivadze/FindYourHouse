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
showPropVideo=this.infoService.video;
floorplan=this.infoService.floorimg;
mapvalidity: boolean = 
  !isNaN(parseFloat(this.infoService.chosenCard.latitude.toString())) &&
  !isNaN(parseFloat(this.infoService.chosenCard.longitude.toString()));



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
 console.log('map',this.mapvalidity);
  
    
    // Pass the 'id' to the service
  }

  
}
