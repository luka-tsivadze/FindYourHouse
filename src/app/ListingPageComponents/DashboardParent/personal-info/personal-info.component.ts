import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageChooserService } from '../../../Services/language-chooser/language-chooser.service';
import { text } from 'node:stream/consumers';
import { NavInfoService } from '../../../Services/NavService/nav-info.service';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent implements OnInit {
  staticElements={Header:'Personal Information' , updateBtn:'Update Your Password' , submit:'Submit' }
  UserMessage={text:'Your Information has been updated successfully',error:false , fileSelected:false};
  inputText=[{

     label:'First Name', placeholder:'Enter Your First Name',type:'text', FormControlName:'saxeli',
  },
  {
    label:'Last Name',placeholder:'Enter Your Last Name',type:'text', FormControlName:'gvari',
  },

  {
    label:'Phone Number',placeholder:'ex:+1-800-7700-00',type:'text', FormControlName:'nomeri',
  },
  {label:'Address',placeholder:'Write Your Address hare',FormControlName:'sacxovrebeli_adgili'},
  
]
UserSelect=[
  {label:'Account type', placeholder:'Choose Acaunt Type' ,options:{dis:['Sales Manager','User'], val:['Sales Manager','User'] },FormControlName:'angarishis_tipi'},
   {label:'Gender',placeholder:'Choose Gender' ,options:{dis:['Male', 'Female'],val:['Male', 'Female'] },FormControlName:'sqesi'}
]
textArea=[

  {label:'About Yourself',placeholder:'Write about Yourself',FormControlName:'chems_shesaxeb'},
]

Form:FormGroup ;
  selectedFile!: File;
constructor(private langServ:LanguageChooserService , private fb:FormBuilder , private navServ:NavInfoService) {
  this.Form=this.fb.group({
   
    saxeli:[''],
    gvari:[''],
    nomeri:[''],
    sacxovrebeli_adgili:[''],
    chems_shesaxeb:[''],
    momxmareblis_idi:[''],
    angarishis_tipi:[''],
    sqesi:[''],
  
    

  });
}
submit(){
  this.Form.get('momxmareblis_idi')?.setValue(this.navServ.userId);
  
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
