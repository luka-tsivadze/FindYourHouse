import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrl: './floor-plan.component.scss'
})
export class FloorPlanComponent {
floorplan=this.infoService.chosenCard.floorPlan;
header='Floor Plan';
  constructor( private infoService:PropertyInformationService ,  private lang:  LanguageChooserService) {
    this.header=this.lang.chosenLang.DetailedInfo.Floorplan; 
  

    
  }
}
