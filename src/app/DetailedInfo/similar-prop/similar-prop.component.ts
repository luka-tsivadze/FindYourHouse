import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-similar-prop',
  templateUrl: './similar-prop.component.html',
  styleUrl: './similar-prop.component.scss'
})
export class SimilarPropComponent {
 simProp='Similar Properties'
data=this.Infoservice.similarProp;
FeaturePS=this.staticInfo.featuredPropertiesStatic;
  constructor(private Infoservice:PropertyInformationService, private staticInfo:MainPageDataService ,private lang:LanguageChooserService) {
    this.simProp=this.lang.chosenLang.DetailedInfo.simProp;

  }
}
