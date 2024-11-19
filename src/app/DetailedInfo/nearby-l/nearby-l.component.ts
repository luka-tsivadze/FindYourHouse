import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

@Component({
  selector: 'app-nearby-l',
  templateUrl: './nearby-l.component.html',
  styleUrl: './nearby-l.component.scss'
})
export class NearbyLComponent {
info=this.service.nearbyProp;

  constructor(private service:PropertyInformationService) { 

  }

  getStarArray(review: number): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
  }

}
