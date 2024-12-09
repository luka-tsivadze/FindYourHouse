import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
inputs=[{placeholder:'First Name', type:'text'},{placeholder:'Last Name'},{placeholder:'Email',type:'email'} ]
contactInfo=[{IconLink:'../../assets/Imges/StaticImg/StaticIcons/clock.svg', text:'+456 875 369 208' },{IconLink:'../../assets/Imges/StaticImg/StaticIcons/envelope-fill.svg', text:'support@findhouses.com'},{IconLink:'../../assets/Imges/StaticImg/StaticIcons/telephone-fill.svg', text:'8:00 a.m - 9:00 p.m'}];

}
