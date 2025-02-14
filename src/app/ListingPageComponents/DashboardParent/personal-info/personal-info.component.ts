import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LanguageChooserService } from '../../../Services/language-chooser/language-chooser.service';
import { text } from 'node:stream/consumers';


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
    label:'Phone Number',placeholder:'ex:+1-800-7700-00',type:'text', FormControlName:'phone',
  }
]
textArea=[
  {label:'Address',placeholder:'Write Your Address hare',FormControlName:'misamarti'},
  {label:'About Yourself',placeholder:'Write about Yourself',FormControlName:'qalaqi'},
]
// changePassword=[{label:'New Password',placeholder:'Write New Password',type:'password',FormControlName:'axaliparoli'},
//   {label:'Repeat Password',placeholder:'Confirm Password',type:'password',FormControlName:'parolisdamtkiceba'}]
Form:FormGroup ;
  selectedFile!: File;
constructor(private langServ:LanguageChooserService , private fb:FormBuilder){
  this.Form=this.fb.group({
    file:new FormControl(null),
  });
}
submit(){
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
onFileSelected(event: any) {
  this.UserMessage.fileSelected=true;
  const file = event.target.files[0]; // Get the first selected file
  if (file && file.type.startsWith('image/')) { // Check if the file is an image
    this.Form.get('file')?.setValue(file); // Set the file in the FormControl
    this.UserMessage.error=false;
    this.UserMessage.text='Your Information has been updated successfully Click save to save changes';
  } else {
    this.UserMessage.error=true;
    this.UserMessage.text='Only image files are allowed. upload Failed';
    alert('Only image files are allowed.');
    this.Form.get('file')?.setValue(null); 
  }
}

}
