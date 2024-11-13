import { Component } from '@angular/core';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

@Component({
  selector: 'app-detailed-info-parent',
  templateUrl: './detailed-info-parent.component.html',
  styleUrl: './detailed-info-parent.component.scss'
})
export class DetailedInfoParentComponent {

  description=this.infoService.chosenCard.describtion;

  constructor(private navService:NavInfoService ,private infoService:PropertyInformationService) {

    this.navService.scrollobser.next(true);
   }

}
