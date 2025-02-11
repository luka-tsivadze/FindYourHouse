import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-recent-prop-r',
  templateUrl: './recent-prop-r.component.html',
  styleUrl: './recent-prop-r.component.scss'
})
export class RecentPropRComponent {

Recentdata = this.cardService.RecentProp;
recentStatic='Recent Properties';
  constructor(private cardService:PropertyInformationService ,private lang:LanguageChooserService) {
    this.recentStatic=this.lang.chosenLang.DetailedInfo.recentStatic; 

   }
}
