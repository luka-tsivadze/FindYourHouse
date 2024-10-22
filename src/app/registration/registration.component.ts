import { Component, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { RegistrationService } from '../Services/registration/registration.service';
import { FormControl, FormGroup, Validators , FormsModule} from '@angular/forms';

import { ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
displayFirst:boolean =true ;
LoginForm!: FormGroup;
RegistrForm!: FormGroup;
codeSegment=false;
verification: boolean=false
verificationCode ;
public RememberMe = new FormControl(false);
@ViewChild('loginName') loginName!: ElementRef;
@ViewChild('registName') registName!: ElementRef;
 
constructor(private registrationService: RegistrationService, private http:HttpClient) {}


  ngOnInit() {
    // Subscribe to the displayer observable
    this.displayerSubscription = this.registrationService.displayer$.subscribe(
      (value: boolean) => {
        this.displayer = value;  // Update local displayer value
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
      nomeri: new FormControl('+995', [Validators.required, Validators.minLength(9),  Validators.pattern('^\\+?[0-9]*$')]),
      verificationInput: new FormControl('', Validators.required),
      sqesi: new FormControl('', Validators.required),
      dabadebis_weli: new FormControl('', Validators.required),
      buttonSub: new FormControl('register'),
    });
  }

  makeDisplayFlse() {
    // Set displayer to false to hide the form
    window.document.body.style.overflow = "unset";
    this.registrationService.setDisplayer(false);
  
  }

  chosenBtn() {

    this.login=!this.login;
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
        next: (response) => {
          // Handle successful login
          console.log('Login successful:', response);
          // write if depending on response
          window.location.reload();
        },
        error: (error) => {
          // Handle HTTP errors
          console.error('Request failed:', error);
        }
      })
     


    
    } else {
      console.log('Login form has validation errors');
    }
    // Reload the current page
   
  }
  onSubmitR(): void {
    if (this.RegistrForm.valid) {
    this.http.post("reg_user.php", this.RegistrForm.value).subscribe({
      next: (response) => {
        // Handle successful registration
        console.log('Registration successful:', response);
      },
      error: (error) => {
        // Handle HTTP errors
        console.error('Request failed:', error);
      }
    });
      this.login=true
  
    console.log('Registration form submitted successfully:', this.RegistrForm.value);
    } else {
      console.log('Registration form has validation errors');
    }
  
  }
  sendCode(){
    this.codeSegment=true;
  
    const generateRandomCode = (length: number): string => {
      const characters = '0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      if (this.RegistrForm.value.verificationInput === this.verification) {
        this.verification = true;
      
      }
      return result;
    };
    const verificationCode = generateRandomCode(4);
this.verificationCode = verificationCode;
   
  console.log('amas wavshli mas shemdeg rac telefonze mesiji mova :', verificationCode);
  this.http.post('send_code.php', { nomeri:this.RegistrForm.value.verificationInput, random_kodi: verificationCode }).subscribe({
    next: (response) => {
      // Handle successful code sending
      console.log('Verification code sent successfully:', response);
    },
    error: (error) => {
      // Handle HTTP errors
      console.error('Request failed:', error);
    }
  });
}
  checkCode(){

    if (this.RegistrForm.value.verificationInput === this.verificationCode) {
      this.verification = true;
    console.log('Code is correct:');
    }
  }
}
