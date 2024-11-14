import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

@Component({
  selector: 'app-recent-prop-r',
  templateUrl: './recent-prop-r.component.html',
  styleUrl: './recent-prop-r.component.scss'
})
export class RecentPropRComponent {

Recentdata = this.cardService.RecentProp;
  constructor(private cardService:PropertyInformationService ) {

   }
}
