import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrl: './floor-plan.component.scss'
})
export class FloorPlanComponent {
floorplan=this.infoService.chosenCard.floorPlan;

  constructor( private infoService:PropertyInformationService , ) {
  

    
  }
}
