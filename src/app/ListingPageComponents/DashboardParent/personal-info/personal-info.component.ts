import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageChooserService } from '../../../Services/language-chooser/language-chooser.service';
import { text } from 'node:stream/consumers';
import { NavInfoService } from '../../../Services/NavService/nav-info.service';
import { ListingServiceService } from '../../../Services/listing-service/listing-service.service';
import { load } from 'ol/Image';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent implements OnInit {
  staticElements={Header:'Personal Information' , updateBtn:'Update Your Password' , submit:'Submit' }
  UserMessage={text:'Your Information has been updated successfully',error:false,load:false };
  inputText=[{   label:'First Name', placeholder:'Enter Your First Name',type:'text', FormControlName:'saxeli',},
 {
   label:'Last Name',placeholder:'Enter Your Last Name',type:'text', FormControlName:'gvari',
 },

 {
   label:'Phone Number',placeholder:'ex:+1-800-7700-00',type:'text', FormControlName:'nomeri',
 },
 {label:'Address',placeholder:'Write Your Address hare',FormControlName:'sacxovrebeli_adgili'},
 
]
UserSelect=[
  {label:'Account type', placeholder:'Choose Acaunt Type' ,options:{dis:['Sales Manager','User'], val:['gayidvebis_menejeri','momxmarebeli'] },FormControlName:'angarishis_tipi'},
   {label:'Gender',placeholder:'Choose Gender' ,options:{dis:['Male', 'Female'],val:['kaci', 'qali'] },FormControlName:'sqesi'}
]
textArea=[
  {label:'About Yourself',placeholder:'Write about Yourself',FormControlName:'chems_shesaxeb'},
]

Form:FormGroup ;
  selectedFile!: File;
constructor(private langServ:LanguageChooserService , private fb:FormBuilder , private navServ:NavInfoService ,
  private listingServ:ListingServiceService) {
  this.Form = this.fb.group({
    saxeli: [this.navServ.IsSignedIn.Name.split(' ')[0], Validators.required],
    gvari: [this.navServ.IsSignedIn.Name.split(' ')[1] ,  Validators.required],
    nomeri: [this.navServ.IsSignedIn.number , Validators.required],
    sacxovrebeli_adgili: [this.navServ.IsSignedIn.location],
    chems_shesaxeb: [''],
    momxmareblis_idi: [''],
    angarishis_tipi: [''],
    sqesi: [''],
  });
}
submit(){
  this.Form.get('momxmareblis_idi')?.setValue(this.navServ.userId);
  this.listingServ.ChangeUserData(this.Form.value).subscribe((data)=>{


    if(data.status=="success"){
      this.UserMessage={text:'Your Information has been updated successfully',error:false ,load:true }
  }else {
    this.UserMessage={text:'Information was not updated',error:true ,load:true }
  }
});
  
  console.log(this.Form.value);
}
ngOnInit(){
this.staticElements=this.langServ.chosenLang.Dashboard.PersonalInfo.staticElements;

  this.inputText = this.inputText.map((el, index) => ({
    ...el ,// spread existing properties
    placeholder: this.langServ.chosenLang.Dashboard.PersonalInfo.inputText[index].placeholder,
    label: this.langServ.chosenLang.Dashboard.PersonalInfo.inputText[index].label,
  }));

  
}


}
