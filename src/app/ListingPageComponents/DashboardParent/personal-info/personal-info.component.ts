import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {

  inputText=[{

     label:'First Name',placeholder:'Enter Your First Name',type:'text', FormControlName:'saxeli',
  },
  {
    label:'Last Name',placeholder:'Enter Your Last Name',type:'text', FormControlName:'gvari',
  },
  {
    label:'Email Address',placeholder:'Enter Your Email',type:'email', FormControlName:'emaili',
  },
  {
    label:'Phone Number',placeholder:'ex:+1-800-7700-00',type:'text', FormControlName:'phone',
  }
]
textArea=[
  {label:'Address',placeholder:'Write Your Address hare',FormControlName:'misamarti'},
  {label:'About Yourself',placeholder:'Write about Yourself',FormControlName:'qalaqi'},
]
changePassword=[{label:'New Password',placeholder:'Write New Password',type:'password',FormControlName:'axaliparoli'},
  {label:'Repeat Password',placeholder:'Confirm Password',type:'password',FormControlName:'parolisdamtkiceba'}]


}
