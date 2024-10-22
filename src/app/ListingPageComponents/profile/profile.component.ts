import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavInfoService } from '../../Services/NavService/nav-info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
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

  constructor(private fb: FormBuilder, private NavService:NavInfoService) {
   this.profileInfo=this.NavService.IsSignedIn

  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
