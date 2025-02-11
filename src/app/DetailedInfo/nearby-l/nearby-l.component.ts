import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-nearby-l',
  templateUrl: './nearby-l.component.html',
  styleUrl: './nearby-l.component.scss'
})
export class NearbyLComponent {
info=this.service.nearbyProp;//maybe later will be translated
near="What's Nearby";
  constructor(private service:PropertyInformationService,private lang:LanguageChooserService) {
    this.near=this.lang.chosenLang.DetailedInfo.near;
   }

  getStarArray(review: number): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
  }

}
