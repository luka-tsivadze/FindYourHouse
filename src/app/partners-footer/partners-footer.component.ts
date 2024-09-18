import { Component } from '@angular/core';
import { FooterService } from '../Services/footer/footer.service';
@Component({
  selector: 'app-partners-footer',
  templateUrl: './partners-footer.component.html',
  styleUrl: './partners-footer.component.scss'
})
export class PartnersFooterComponent {

  constructor(public Service: FooterService){

  }

}
