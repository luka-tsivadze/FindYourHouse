import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { AllCardsService } from '../../Services/all-cards/all-cards.service';
import { info } from 'console';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrl: './agent-info.component.scss'
})
export class AgentInfoComponent {
  profileForm: FormGroup;
profileInfo;
infoSent=[{bol:false, message:'please Fill in the required fields'},{bol:false, message:'Your request has been sent'}];
 
  staticValues={
    h3:'Agent Information',
    p:'Agent of Property',  //could be changed to dynamic
    req:'Request Inquiry',
    submit:'Submit Request',
    textArea:'Message'
  }
 
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
  
   constructor(private fb: FormBuilder, private NavService:NavInfoService ,private propService:PropertyInformationService
    , private lang:LanguageChooserService) {
   this.profileInfo = this.propService.chosenCard;
   this.forNgRow[0].text = this.profileInfo.Nomeri;
   this.forNgRow[1].text = this.profileInfo.email;
this.staticValues=this.lang.chosenLang.DetailedInfo.AgentsInfo.staticValues;
this.inputs=this.lang.chosenLang.DetailedInfo.AgentsInfo.inputs;
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      saxeli: ['', Validators.required],
      nomeri: ['+995', [Validators.required , Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      Message: ['', Validators.required]
    });
  }
  onSubmit() {
    this.infoSent[0].bol=true;
    this.infoSent[1].bol=false;
    if(this.profileForm.invalid){
      return;
    }
    console.log(this.profileForm.value , this.profileForm.valid);
    this.propService.SendUserMessage(this.profileForm.value).subscribe((data)=>{
      console.log(data);
      if(data !== null && data){
        this.infoSent[0].bol=false;
        this.infoSent[1].bol=true;
        this.profileForm.reset();
      }else{
        this.infoSent[0].message='Something went wrong, please try again';
        this.infoSent[0].bol=true;
        this.infoSent[1].bol=false;
      }
      
    });
  }
}
