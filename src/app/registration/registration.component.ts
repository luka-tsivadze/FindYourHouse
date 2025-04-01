
import { Component, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { RegistrationService } from '../Services/registration/registration.service';
import { FormControl, FormGroup, Validators , FormsModule} from '@angular/forms';

import { ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavInfoService } from '../Services/NavService/nav-info.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
[x: string]: any;
  displayer: boolean = true;
  private displayerSubscription: Subscription;
login=false;
userId;
displayFirst:boolean =true ;
LoginForm!: FormGroup;
RegistrForm!: FormGroup;
codeSegment=false;
verification: boolean=false
error=false;
RError=false;
errorText;
regErrorText;
verificationCode ;
Registration=[
  {FormControlName:'saxeli' , labelText:'First Name*', For:"firstNameReg" ,type:'text' ,errortext:'First Name is required.', chack:false},
  {FormControlName:'gvari' , labelText:'Last Name*', For:"lastNameReg" ,type:'text' ,errortext:'Last Name is required.', chack:false},
  {FormControlName:'maili' , labelText:'Email Address*', For:"emailReg" ,type:'email' ,errortext:'Email is required.' , chack:false},
  {FormControlName:'paroli' , labelText:'Password*', For:"passwordReg" ,type:'password' ,errortext:'Password is required.' , chack:false},
  {FormControlName:'paroliRepeat' , labelText:'Repeat Password*', For:"repeatPasswordReg" ,type:'password' ,errortext:'Repeat Password is required.' , chack:true},
  {FormControlName:'nomeri' , labelText:'Phone Number*', For:"phoneReg" ,type:'text' ,errortext:'Phone Number is required.' , chack:false},
  
]
public RememberMe = new FormControl(false);
@ViewChild('loginName') loginName!: ElementRef;
@ViewChild('registName') registName!: ElementRef;
 
constructor(private registrationService: RegistrationService, private http:HttpClient ,private navServ:NavInfoService) {
 
}


  ngOnInit() {

    // Subscribe to the displayer observable
    this.displayerSubscription = this.registrationService.displayer$.subscribe(
      (value: boolean) => {
        this.displayer = value;  // Update local displayer value
        this.chosenBtn();
      }
    );
    this.registrationService.displayerFirst$.pipe(take(2)).subscribe((value: boolean) => {
      this.displayFirst = value;
    
    });
    this.LoginForm = new FormGroup({
      maili: new FormControl('', Validators.required),
      paroli: new FormControl('', [
        Validators.required,
        Validators.minLength(6),// At least one digit
      ]),
      rememberMe: new FormControl(false)   
    }); 
    
    this.RegistrForm = new FormGroup({
      maili: new FormControl('', [Validators.required, Validators.email]),
      paroli: new FormControl('', [Validators.required, Validators.minLength(6)]),
      saxeli: new FormControl('', Validators.required),
      gvari: new FormControl('', Validators.required),
      paroliRepeat: new FormControl('', Validators.required),
      nomeri : new FormControl('+995', [      Validators.required,    Validators.minLength(9),    Validators.maxLength(13),       Validators.pattern('^\\+?[0-9]*$')    ]),
      
      verificationInput: new FormControl('', Validators.required),
      sqesi: new FormControl('', Validators.required),
   
      buttonSub: new FormControl('register'),
    });




  }

  makeDisplayFlse() {
    // Set displayer to false to hide the form
    window.document.body.style.overflow = "unset";
    this.registrationService.setDisplayer(false);
  
  }

  chosenBtn() {
    this.login = this.registrationService.login;

  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    
    if (this.displayerSubscription) {
      this.displayerSubscription.unsubscribe();
    }
  }

  onSubmitL(): void {
    if (this.LoginForm.valid) {
      this.http.post('login_user.php', this.LoginForm.value).subscribe({
        next: (response: any) => {
       
        localStorage.setItem('id', response.id)
         this.navServ.getUserInfo(response.id).subscribe({});
         this.makeDisplayFlse();   //just change Nav component to work 
          window.location.reload();
        },
        error: (error) => {
        this.error=true;
        this.errorText=error.error.message;
        if (error.error.message=='paroli-arasworia'){
            this.errorText='password is incorrect'; 
        }else if(error.error.message=='angarishi-ver-moidzebna'){
            this.errorText='user not found';
        }
          console.error('Request failed:', error.error.message);
        }
      })
     


    
    } else {
      console.log('Login form has validation errors');
    }

   
  }
  onSubmitR(): void {
    if (!this.RegistrForm.invalid) {
      
      
      
      console.log('Registration form submitted:',this.RegistrForm.getRawValue());
 
      const formData = this.RegistrForm.getRawValue();
 
      this.http.post("reg_user.php", formData).subscribe({
        next: (response: any) => {
          
          // Handle successful registration
       
if (response.message === 'nomeri-arasworia') {
  this.regErrorText = 'Phone number is incorrect';
} else if (response.message === 'email-already-in-use') {
  this.regErrorText = 'Email already in use';
} else if (response.message === 'email-invalid') { 
  this.regErrorText = 'Email is invalid';
} else if (response.status === 'error') {
  this.regErrorText = `There is a problem with the server, try again later. Error: (${response.message})`;
} else {
  this.RError = false;
  this.login = true;
  return;
}
this.RError = true;
},
        error: (error) => {
          // Handle HTTP errors
          console.error('Request failed:', error);
          this.RError=true;
          this.regErrorText=`there is a problem with the server try agein later  Error Message:(${error.message})`;
        }
      });
    } else {
      console.log('Registration form has validation errors');
    }
  }
  

  onCodeInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 4) {
      console.log('Verification code chacked:', input.value);
      this.checkCode();
    }
  }
  
  sendCode() {
    this.codeSegment = true;
    
    let phoneNumber = this.RegistrForm.controls['nomeri'].value;


    if (phoneNumber.length === 9) {
      phoneNumber = '+995' + phoneNumber; 
    } else if (phoneNumber.startsWith('995')) {
      phoneNumber = '+' + phoneNumber;
    } else if (phoneNumber.startsWith('99')) {
      phoneNumber = '+995' + phoneNumber.substring(2);
    }else if (phoneNumber.startsWith('95')) {
      phoneNumber = '+995' + phoneNumber.substring(2);
    }else if (phoneNumber.startsWith('5')) {
      phoneNumber = '+995' + phoneNumber.substring(1);
    }else if (phoneNumber.startsWith('+95')) {
      phoneNumber = '+995' + phoneNumber.substring(3);
    }
    // Update form value before submission
    this.RegistrForm.controls['nomeri'].setValue(phoneNumber);
    this.RegistrForm.controls['nomeri'].disable();
    // Helper function to generate a random 4-digit code
    const generateRandomCode = (length: number): string => {
      const characters = '0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };
  
 
    const verificationCode = generateRandomCode(4);
    this.verificationCode = verificationCode;
  
    // Validate phone number (international format)
    const nomeri = phoneNumber;
    if (!/^\+[0-9]{7,15}$/.test(nomeri)) {
      console.error('Invalid phone number format');
      return;
    }
  
  

    this.http.post('send_code.php', { nomeri, random_kodi: verificationCode }).subscribe({
      next: (response) => {
        console.log('Verification code sent successfully:' , response);
    this.RegistrForm.get('nomeri')?.disable();
    
      },
      error: (error) => {
        console.error('Failed to send verification code:', error);
      }
    });
  }
  
  checkCode(){
 
    if (this.RegistrForm.value.verificationInput === this.verificationCode) {
      this.verification = true;

    
    }
  }


}
