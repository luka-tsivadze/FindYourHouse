import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { AllCardsService } from '../../Services/all-cards/all-cards.service';
import { info } from 'console';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrl: './agent-info.component.scss'
})
export class AgentInfoComponent {
  profileForm: FormGroup;
profileInfo;


  forNgRow = [
    { imgLink: '../../../assets/Imges/Footer/FooterIcons/telephone-fill.svg', alt: 'telephone', text: '(234) 0200 17813' },
    { imgLink: '../../../assets/Imges/Footer/FooterIcons/envelope-fill.svg', alt: 'envelope', text: 'lisa&#64;gmail.com' }
  ];

  inputs = [
    {
      type: 'text',
      placeholder: 'First Name',
      formControlName: 'firstName'
    },
    {
      type: 'number',
      placeholder: 'Phone Number',
      formControlName: 'phoneNumber'
    },
    {
      type: 'email',
      placeholder: 'Email',
      formControlName: 'email'
    }
  ];
  
   constructor(private fb: FormBuilder, private NavService:NavInfoService ,private propService:PropertyInformationService) {
   this.profileInfo = this.propService.chosenCard;
   this.forNgRow[0].text = this.profileInfo.Nomeri;
   this.forNgRow[1].text = this.profileInfo.email;

  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Message: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
