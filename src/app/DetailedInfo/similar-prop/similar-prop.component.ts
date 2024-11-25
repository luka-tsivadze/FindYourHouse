import { Component } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';

@Component({
  selector: 'app-similar-prop',
  templateUrl: './similar-prop.component.html',
  styleUrl: './similar-prop.component.scss'
})
export class SimilarPropComponent {
 
data=this.Infoservice.similarProp;
FeaturePS=this.staticInfo.featuredPropertiesStatic;
  constructor(private Infoservice:PropertyInformationService, private staticInfo:MainPageDataService ){}
}
